// Graphing Application - تطبيق الرسم البياني
class GraphingApp {
    constructor() {
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        // Graph settings
        this.xMin = -10;
        this.xMax = 10;
        this.yMin = -10;
        this.yMax = 10;
        this.precision = 500;
        
        // Grid settings
        this.gridSpacing = 1;
        this.axisColor = '#2c3e50';
        this.gridColor = '#ecf0f1';
        this.functionColor = '#e74c3c';
        this.backgroundColor = '#ffffff';
        this.gridType = 'unified'; // unified or separate
        
        // Pan settings
        this.isPanning = false;
        this.panStartX = 0;
        this.panStartY = 0;
        this.panStartXMin = 0;
        this.panStartYMin = 0;
        this.panStartXMax = 0;
        this.panStartYMax = 0;
        
        // Initialize
        this.initializeCanvas();
        this.setupEventListeners();
        this.plotFunction();
    }
    
    initializeCanvas() {
        // Get container dimensions
        const container = this.canvas.parentElement;
        const containerRect = container.getBoundingClientRect();
        
        // Set canvas size for high DPI displays
        const dpr = window.devicePixelRatio || 1;
        
        // Use full container width and height
        const targetWidth = containerRect.width - 20; // Minimal padding for mobile
        const targetHeight = Math.max(500, window.innerHeight * 0.6); // At least 500px or 60% of screen height
        
        // Set canvas dimensions
        this.canvas.width = targetWidth * dpr;
        this.canvas.height = targetHeight * dpr;
        
        // Set display size
        this.canvas.style.width = targetWidth + 'px';
        this.canvas.style.height = targetHeight + 'px';
        
        // Scale context for high DPI
        this.ctx.scale(dpr, dpr);
        
        // Store dimensions
        this.width = targetWidth;
        this.height = targetHeight;
        
        console.log(`Mobile Canvas initialized: ${this.width}x${this.height} (${targetWidth * dpr}x${targetHeight * dpr} with DPR ${dpr})`);
    }
    
    setupEventListeners() {
        // Function input
        document.getElementById('functionInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.plotFunction();
            }
        });
        
        // Range inputs
        ['xMin', 'xMax', 'yMin', 'yMax'].forEach(id => {
            document.getElementById(id).addEventListener('change', () => {
                this.updateRanges();
                this.plotFunction();
            });
        });
        
        // Precision selector
        document.getElementById('precision').addEventListener('change', (e) => {
            this.precision = parseInt(e.target.value);
            this.plotFunction();
        });
        
        // Grid type selector
        document.getElementById('gridType').addEventListener('change', (e) => {
            this.gridType = e.target.value;
            
            // If switching to unified grid, make the view square
            if (this.gridType === 'unified') {
                this.makeViewSquare();
            }
            
            this.plotFunction();
        });
        
        // Canvas click for coordinates
        this.canvas.addEventListener('click', (e) => {
            this.showCoordinates(e);
        });
        
        // Canvas wheel for zoom
        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.handleZoom(e);
        });
        
        // Canvas pan (drag to move)
        this.canvas.addEventListener('mousedown', (e) => {
            this.startPan(e);
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            this.pan(e);
        });
        
        this.canvas.addEventListener('mouseup', () => {
            this.stopPan();
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.stopPan();
        });
        
        // Touch support for mobile devices
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                this.startPan({ clientX: touch.clientX, clientY: touch.clientY });
            }
        });
        
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                this.pan({ clientX: touch.clientX, clientY: touch.clientY });
            }
        });
        
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.stopPan();
        });
    }
    
    updateRanges() {
        this.xMin = parseFloat(document.getElementById('xMin').value);
        this.xMax = parseFloat(document.getElementById('xMax').value);
        this.yMin = parseFloat(document.getElementById('yMin').value);
        this.yMax = parseFloat(document.getElementById('yMax').value);
        
        // Validate ranges
        if (this.xMin >= this.xMax) {
            this.xMax = this.xMin + 20;
            document.getElementById('xMax').value = this.xMax;
        }
        if (this.yMin >= this.yMax) {
            this.yMax = this.yMin + 20;
            document.getElementById('yMax').value = this.yMax;
        }
    }
    
    // Convert mathematical coordinates to pixel coordinates
    mathToPixel(x, y) {
        const pixelX = ((x - this.xMin) / (this.xMax - this.xMin)) * this.width;
        const pixelY = this.height - ((y - this.yMin) / (this.yMax - this.yMin)) * this.height;
        return { pixelX, pixelY };
    }
    
    // Convert pixel coordinates to mathematical coordinates
    pixelToMath(pixelX, pixelY) {
        const x = this.xMin + (pixelX / this.width) * (this.xMax - this.xMin);
        const y = this.yMax - (pixelY / this.height) * (this.yMax - this.yMin);
        return { x, y };
    }
    
    // Evaluate mathematical function
    evaluateFunction(func, x) {
        try {
            let expression = func;
            
            // Replace mathematical notations
            expression = expression.replace(/x\^(\d+)/g, 'x**$1');
            expression = expression.replace(/sin\(/g, 'Math.sin(');
            expression = expression.replace(/cos\(/g, 'Math.cos(');
            expression = expression.replace(/tan\(/g, 'Math.tan(');
            expression = expression.replace(/log\(/g, 'Math.log10(');
            expression = expression.replace(/ln\(/g, 'Math.log(');
            expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
            expression = expression.replace(/abs\(/g, 'Math.abs(');
            expression = expression.replace(/pi/g, 'Math.PI');
            expression = expression.replace(/e\^x/g, 'Math.exp(x)');
            expression = expression.replace(/e/g, 'Math.E');
            
            // Handle implicit multiplication
            expression = expression.replace(/(\d+)x/g, '$1*x');
            expression = expression.replace(/x(?=\d)/g, 'x*');
            expression = expression.replace(/(-)(\d+)x/g, '$1$2*x');
            expression = expression.replace(/(\d+\.\d+)x/g, '$1*x');
            
            // Replace x with actual value
            expression = expression.replace(/x/g, x);
            
            // Security check
            const allowedChars = /^[0-9+\-*/().,Math\s]+$/;
            if (!allowedChars.test(expression)) {
                throw new Error('Invalid characters in expression');
            }
            
            return eval(expression);
        } catch (e) {
            console.error('Function evaluation error:', e);
            return NaN;
        }
    }
    
    // Draw coordinate grid
    drawGrid() {
        this.ctx.strokeStyle = this.gridColor;
        
        // Adaptive line width for mobile
        const isMobile = this.width < 600;
        this.ctx.lineWidth = isMobile ? 0.5 : 1;
        
        let xStep, yStep;
        
        if (this.gridType === 'unified') {
            // Use unified grid step for both axes (square grid)
            const unifiedStep = this.calculateUnifiedGridStep();
            xStep = unifiedStep;
            yStep = unifiedStep;
        } else {
            // Use separate grid steps for each axis (rectangular grid)
            const xRange = this.xMax - this.xMin;
            const yRange = this.yMax - this.yMin;
            xStep = this.calculateGridStep(xRange);
            yStep = this.calculateGridStep(yRange);
        }
        
        // On mobile, reduce grid density for better visibility
        if (isMobile) {
            xStep *= 1.5; // Less aggressive reduction for better coverage
            yStep *= 1.5;
        }
        
        // Vertical grid lines
        for (let x = Math.ceil(this.xMin / xStep) * xStep; x <= this.xMax; x += xStep) {
            if (Math.abs(x) < 0.0001) continue; // Skip zero line (will be drawn as axis)
            
            const { pixelX } = this.mathToPixel(x, 0);
            this.ctx.beginPath();
            this.ctx.moveTo(pixelX, 0);
            this.ctx.lineTo(pixelX, this.height);
            this.ctx.stroke();
        }
        
        // Horizontal grid lines
        for (let y = Math.ceil(this.yMin / yStep) * yStep; y <= this.yMax; y += yStep) {
            if (Math.abs(y) < 0.0001) continue; // Skip zero line (will be drawn as axis)
            
            const { pixelY } = this.mathToPixel(0, y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, pixelY);
            this.ctx.lineTo(this.width, pixelY);
            this.ctx.stroke();
        }
    }
    
    // Calculate appropriate grid step size
    calculateGridStep(range) {
        const logRange = Math.log10(range);
        const power = Math.floor(logRange);
        const factor = range / Math.pow(10, power);
        
        if (factor < 2) return Math.pow(10, power - 1);
        if (factor < 5) return Math.pow(10, power - 1) * 2;
        return Math.pow(10, power - 1) * 5;
    }
    
    // Calculate unified grid step for both axes
    calculateUnifiedGridStep() {
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        
        // Use the smaller range to determine grid step
        const smallerRange = Math.min(xRange, yRange);
        const logRange = Math.log10(smallerRange);
        const power = Math.floor(logRange);
        const factor = smallerRange / Math.pow(10, power);
        
        let step;
        if (factor < 2) step = Math.pow(10, power - 1);
        else if (factor < 5) step = Math.pow(10, power - 1) * 2;
        else step = Math.pow(10, power - 1) * 5;
        
        return step;
    }
    
    // Make the view square for unified grid
    makeViewSquare() {
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        const maxRange = Math.max(xRange, yRange);
        const centerX = (this.xMax + this.xMin) / 2;
        const centerY = (this.yMax + this.yMin) / 2;
        
        this.xMin = centerX - maxRange / 2;
        this.xMax = centerX + maxRange / 2;
        this.yMin = centerY - maxRange / 2;
        this.yMax = centerY + maxRange / 2;
        
        // Update input fields
        document.getElementById('xMin').value = this.xMin.toFixed(2);
        document.getElementById('xMax').value = this.xMax.toFixed(2);
        document.getElementById('yMin').value = this.yMin.toFixed(2);
        document.getElementById('yMax').value = this.yMax.toFixed(2);
    }
    
    // Start panning
    startPan(e) {
        this.isPanning = true;
        this.panStartX = e.clientX;
        this.panStartY = e.clientY;
        this.panStartXMin = this.xMin;
        this.panStartYMin = this.yMin;
        this.panStartXMax = this.xMax;
        this.panStartYMax = this.yMax;
        
        // Change cursor to indicate panning
        this.canvas.style.cursor = 'grabbing';
    }
    
    // Pan the view
    pan(e) {
        if (!this.isPanning) return;
        
        const deltaX = e.clientX - this.panStartX;
        const deltaY = e.clientY - this.panStartY;
        
        // Convert pixel delta to mathematical delta
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        
        const deltaXMath = -(deltaX / this.width) * xRange;
        const deltaYMath = (deltaY / this.height) * yRange;
        
        // Update ranges
        this.xMin = this.panStartXMin + deltaXMath;
        this.xMax = this.panStartXMax + deltaXMath;
        this.yMin = this.panStartYMin + deltaYMath;
        this.yMax = this.panStartYMax + deltaYMath;
        
        // Update input fields
        document.getElementById('xMin').value = this.xMin.toFixed(2);
        document.getElementById('xMax').value = this.xMax.toFixed(2);
        document.getElementById('yMin').value = this.yMin.toFixed(2);
        document.getElementById('yMax').value = this.yMax.toFixed(2);
        
        // Show pan status
        this.showStatus(`تم التحريك: X: ${this.xMin.toFixed(2)} إلى ${this.xMax.toFixed(2)}, Y: ${this.yMin.toFixed(2)} إلى ${this.yMax.toFixed(2)}`, 'success');
        
        // Redraw
        this.plotFunction();
    }
    
    // Stop panning
    stopPan() {
        if (this.isPanning) {
            this.isPanning = false;
            this.canvas.style.cursor = 'default';
        }
    }
    
    // Draw coordinate axes
    drawAxes() {
        this.ctx.strokeStyle = this.axisColor;
        this.ctx.lineWidth = 2;
        
        // X-axis
        if (this.yMin <= 0 && this.yMax >= 0) {
            const { pixelY } = this.mathToPixel(0, 0);
            this.ctx.beginPath();
            this.ctx.moveTo(0, pixelY);
            this.ctx.lineTo(this.width, pixelY);
            this.ctx.stroke();
        }
        
        // Y-axis
        if (this.xMin <= 0 && this.xMax >= 0) {
            const { pixelX } = this.mathToPixel(0, 0);
            this.ctx.beginPath();
            this.ctx.moveTo(pixelX, 0);
            this.ctx.lineTo(pixelX, this.height);
            this.ctx.stroke();
        }
        
        // Draw axis labels
        this.drawAxisLabels();
    }
    
    // Draw axis labels and tick marks
    drawAxisLabels() {
        this.ctx.fillStyle = this.axisColor;
        
        // Adaptive font size based on screen size
        const isMobile = this.width < 600;
        const fontSize = isMobile ? 10 : 12;
        this.ctx.font = `${fontSize}px Cairo`;
        this.ctx.textAlign = 'center';
        
        let xStep, yStep;
        
        if (this.gridType === 'unified') {
            // Use unified grid step for both axes
            const unifiedStep = this.calculateUnifiedGridStep();
            xStep = unifiedStep;
            yStep = unifiedStep;
        } else {
            // Use separate grid steps for each axis
            const xRange = this.xMax - this.xMin;
            const yRange = this.yMax - this.yMin;
            xStep = this.calculateGridStep(xRange);
            yStep = this.calculateGridStep(yRange);
        }
        
        // X-axis labels
        if (this.yMin <= 0 && this.yMax >= 0) {
            const { pixelY } = this.mathToPixel(0, 0);
            const labelOffset = isMobile ? 12 : 15;
            
            for (let x = Math.ceil(this.xMin / xStep) * xStep; x <= this.xMax; x += xStep) {
                if (Math.abs(x) < 0.0001) continue;
                
                const { pixelX } = this.mathToPixel(x, 0);
                // Skip labels that are too close together on mobile
                if (isMobile && Math.abs(x) % (xStep * 2) !== 0) continue;
                
                this.ctx.fillText(x.toFixed(1), pixelX, pixelY + labelOffset);
            }
        }
        
        // Y-axis labels
        if (this.xMin <= 0 && this.xMax >= 0) {
            const { pixelX } = this.mathToPixel(0, 0);
            const labelOffset = isMobile ? 12 : 15;
            
            for (let y = Math.ceil(this.yMin / yStep) * yStep; y <= this.yMax; y += yStep) {
                if (Math.abs(y) < 0.0001) continue;
                
                const { pixelY } = this.mathToPixel(0, y);
                // Skip labels that are too close together on mobile
                if (isMobile && Math.abs(y) % (yStep * 2) !== 0) continue;
                
                this.ctx.fillText(y.toFixed(1), pixelX - labelOffset, pixelY + 4);
            }
        }
    }
    
    // Draw function
    drawFunction() {
        const func = document.getElementById('functionInput').value;
        if (!func.trim()) {
            this.showStatus('أدخل دالة في حقل الدالة', 'error');
            return;
        }
        
        this.ctx.strokeStyle = this.functionColor;
        
        // Adaptive line width for mobile
        const isMobile = this.width < 600;
        this.ctx.lineWidth = isMobile ? 2 : 3;
        
        this.ctx.beginPath();
        
        let firstPoint = true;
        let lastValidPoint = null;
        
        // Calculate step size based on precision
        const step = (this.xMax - this.xMin) / this.precision;
        
        for (let x = this.xMin; x <= this.xMax; x += step) {
            const y = this.evaluateFunction(func, x);
            
            if (isFinite(y) && y >= this.yMin - 1000 && y <= this.yMax + 1000) {
                const { pixelX, pixelY } = this.mathToPixel(x, y);
                
                if (firstPoint) {
                    this.ctx.moveTo(pixelX, pixelY);
                    firstPoint = false;
                } else {
                    this.ctx.lineTo(pixelX, pixelY);
                }
                lastValidPoint = { pixelX, pixelY };
            } else {
                // Reset path for discontinuous functions
                firstPoint = true;
            }
        }
        
        if (lastValidPoint && !firstPoint) {
            this.ctx.stroke();
            this.showStatus(`تم رسم الدالة: ${func}`, 'success');
        } else {
            this.showStatus('خطأ في رسم الدالة - تحقق من صحة التعبير', 'error');
        }
    }
    
    // Show status message
    showStatus(message, type) {
        const statusDiv = document.getElementById('statusMessage');
        statusDiv.textContent = message;
        statusDiv.className = `status-message status-${type}`;
        
        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                statusDiv.textContent = '';
                statusDiv.className = '';
            }, 3000);
        }
    }
    
    // Handle zoom with mouse wheel
    handleZoom(e) {
        const zoomFactor = e.deltaY > 0 ? 1.2 : 0.8;
        const { x, y } = this.pixelToMath(e.offsetX, e.offsetY);
        
        const newXRange = (this.xMax - this.xMin) * zoomFactor;
        const newYRange = (this.yMax - this.yMin) * zoomFactor;
        
        this.xMin = x - (x - this.xMin) * zoomFactor;
        this.xMax = x + (this.xMax - x) * zoomFactor;
        this.yMin = y - (y - this.yMin) * zoomFactor;
        this.yMax = y + (this.yMax - y) * zoomFactor;
        
        // Update input fields
        document.getElementById('xMin').value = this.xMin.toFixed(2);
        document.getElementById('xMax').value = this.xMax.toFixed(2);
        document.getElementById('yMin').value = this.yMin.toFixed(2);
        document.getElementById('yMax').value = this.yMax.toFixed(2);
        
        this.plotFunction();
    }
    
    // Show coordinates on click
    showCoordinates(e) {
        const { x, y } = this.pixelToMath(e.offsetX, e.offsetY);
        const func = document.getElementById('functionInput').value;
        
        if (func.trim()) {
            const yValue = this.evaluateFunction(func, x);
            if (isFinite(yValue)) {
                this.showStatus(`النقطة: (${x.toFixed(3)}, ${yValue.toFixed(3)})`, 'success');
            }
        }
    }
    
    // Main plotting function
    plotFunction() {
        // Clear canvas
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Update ranges
        this.updateRanges();
        
        // Draw grid and axes
        this.drawGrid();
        this.drawAxes();
        
        // Draw function
        this.drawFunction();
    }
}

// Zoom functions
function zoomIn() {
    const xRange = (app.xMax - app.xMin) * 0.8;
    const yRange = (app.yMax - app.yMin) * 0.8;
    const xCenter = (app.xMax + app.xMin) / 2;
    const yCenter = (app.yMax + app.yMin) / 2;
    
    app.xMin = xCenter - xRange / 2;
    app.xMax = xCenter + xRange / 2;
    app.yMin = yCenter - yRange / 2;
    app.yMax = yCenter + yRange / 2;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function zoomOut() {
    const xRange = (app.xMax - app.xMin) * 1.2;
    const yRange = (app.yMax - app.yMin) * 1.2;
    const xCenter = (app.xMax + app.xMin) / 2;
    const yCenter = (app.yMax + app.yMin) / 2;
    
    app.xMin = xCenter - xRange / 2;
    app.xMax = xCenter + xRange / 2;
    app.yMin = yCenter - yRange / 2;
    app.yMax = yCenter + yRange / 2;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function resetView() {
    app.xMin = -10;
    app.xMax = 10;
    app.yMin = -10;
    app.yMax = 10;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin;
    document.getElementById('xMax').value = app.xMax;
    document.getElementById('yMin').value = app.yMin;
    document.getElementById('yMax').value = app.yMax;
    
    app.plotFunction();
}

function makeSquare() {
    app.makeViewSquare();
    app.plotFunction();
}

// Pan functions
function panUp() {
    const yRange = app.yMax - app.yMin;
    const panAmount = yRange * 0.2; // Move 20% of the range
    
    app.yMin += panAmount;
    app.yMax += panAmount;
    
    // Update input fields
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function panDown() {
    const yRange = app.yMax - app.yMin;
    const panAmount = yRange * 0.2; // Move 20% of the range
    
    app.yMin -= panAmount;
    app.yMax -= panAmount;
    
    // Update input fields
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function panLeft() {
    const xRange = app.xMax - app.xMin;
    const panAmount = xRange * 0.2; // Move 20% of the range
    
    app.xMin -= panAmount;
    app.xMax -= panAmount;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    
    app.plotFunction();
}

function panRight() {
    const xRange = app.xMax - app.xMin;
    const panAmount = xRange * 0.2; // Move 20% of the range
    
    app.xMin += panAmount;
    app.xMax += panAmount;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    
    app.plotFunction();
}

function panCenter() {
    // Center the view on the current function's interesting points
    const func = document.getElementById('functionInput').value;
    if (func.trim()) {
        // Find some interesting points to center on
        let centerX = 0;
        let centerY = 0;
        let points = 0;
        
        for (let x = app.xMin; x <= app.xMax; x += (app.xMax - app.xMin) / 10) {
            const y = app.evaluateFunction(func, x);
            if (isFinite(y) && y >= app.yMin && y <= app.yMax) {
                centerX += x;
                centerY += y;
                points++;
            }
        }
        
        if (points > 0) {
            centerX /= points;
            centerY /= points;
            
            const xRange = app.xMax - app.xMin;
            const yRange = app.yMax - app.yMin;
            
            app.xMin = centerX - xRange / 2;
            app.xMax = centerX + xRange / 2;
            app.yMin = centerY - yRange / 2;
            app.yMax = centerY + yRange / 2;
            
            // Update input fields
            document.getElementById('xMin').value = app.xMin.toFixed(2);
            document.getElementById('xMax').value = app.xMax.toFixed(2);
            document.getElementById('yMin').value = app.yMin.toFixed(2);
            document.getElementById('yMax').value = app.yMax.toFixed(2);
            
            app.plotFunction();
        }
    }
}

function setFunction(func) {
    document.getElementById('functionInput').value = func;
    app.plotFunction();
}

// Global functions for HTML onclick
function plotFunction() {
    app.plotFunction();
}

// Initialize app when page loads
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new GraphingApp();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (app) {
        app.initializeCanvas();
        app.plotFunction();
    }
});

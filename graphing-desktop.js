class GraphingApp {
    constructor() {
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Initialize canvas with fixed dimensions for desktop
        this.initializeCanvas();
        
        // Default ranges
        this.xMin = -10;
        this.xMax = 10;
        this.yMin = -10;
        this.yMax = 10;
        
        // Precision and colors
        this.precision = 1000;
        this.gridColor = '#e0e0e0';
        this.axisColor = '#333';
        this.functionColor = '#667eea';
        
        // Grid type
        this.gridType = 'unified';
        
        // Pan settings
        this.isPanning = false;
        this.panStartX = 0;
        this.panStartY = 0;
        this.panStartXMin = 0;
        this.panStartYMin = 0;
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initial plot
        this.plotFunction();
    }
    
    initializeCanvas() {
        // Set fixed dimensions for desktop
        const dpr = window.devicePixelRatio || 1;
        
        // Desktop canvas dimensions
        this.width = 1200;
        this.height = 600;
        
        // Set canvas dimensions
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        
        // Set display size
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        
        // Scale context for high DPI
        this.ctx.scale(dpr, dpr);
        
        console.log(`Desktop Canvas initialized: ${this.width}x${this.height} (${this.width * dpr}x${this.height * dpr} with DPR ${dpr})`);
    }
    
    setupEventListeners() {
        // Function input (Enter key)
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
        document.getElementById('precision').addEventListener('change', () => {
            this.precision = parseInt(document.getElementById('precision').value);
            this.plotFunction();
        });
        
        // Grid type selector
        document.getElementById('gridType').addEventListener('change', () => {
            this.gridType = document.getElementById('gridType').value;
            this.plotFunction();
        });
        
        // Canvas click for coordinates
        this.canvas.addEventListener('click', (e) => {
            this.showCoordinates(e);
        });
        
        // Canvas wheel for zoom
        this.canvas.addEventListener('wheel', (e) => {
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
    }
    
    updateRanges() {
        this.xMin = parseFloat(document.getElementById('xMin').value);
        this.xMax = parseFloat(document.getElementById('xMax').value);
        this.yMin = parseFloat(document.getElementById('yMin').value);
        this.yMax = parseFloat(document.getElementById('yMax').value);
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
    
    // Safely evaluate mathematical expressions
    evaluateFunction(func, x) {
        try {
            // Security check - only allow safe characters
            const safeFunc = func.replace(/[^x0-9+\-*/().,^sincotaglqre\s]/g, '');
            
            // Replace mathematical notation
            let expression = safeFunc
                .replace(/x\^(\d+)/g, 'Math.pow(x, $1)')
                .replace(/sin\(/g, 'Math.sin(')
                .replace(/cos\(/g, 'Math.cos(')
                .replace(/tan\(/g, 'Math.tan(')
                .replace(/log\(/g, 'Math.log10(')
                .replace(/ln\(/g, 'Math.log(')
                .replace(/sqrt\(/g, 'Math.sqrt(')
                .replace(/abs\(/g, 'Math.abs(')
                .replace(/pi/g, 'Math.PI')
                .replace(/e\^x/g, 'Math.exp(x)')
                .replace(/e/g, 'Math.E');
            
            // Handle implicit multiplication
            expression = expression.replace(/(-?\d*\.?\d+)x/g, '$1*x');
            expression = expression.replace(/x(?=\d)/g, 'x*');
            
            // Evaluate the expression
            const result = eval(expression);
            return result;
        } catch (error) {
            console.error('Error evaluating function:', error);
            return NaN;
        }
    }
    
    // Draw coordinate grid
    drawGrid() {
        this.ctx.strokeStyle = this.gridColor;
        this.ctx.lineWidth = 1;
        
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
    
    // Calculate optimal grid step size
    calculateGridStep(range) {
        const steps = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];
        const targetSteps = this.width / 50; // Aim for ~50 grid lines
        
        for (let step of steps) {
            if (range / step <= targetSteps) {
                return step;
            }
        }
        return range / 20;
    }
    
    // Calculate unified grid step for square grid
    calculateUnifiedGridStep() {
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        const maxRange = Math.max(xRange, yRange);
        return this.calculateGridStep(maxRange);
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
        this.ctx.font = '12px Cairo';
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
            
            for (let x = Math.ceil(this.xMin / xStep) * xStep; x <= this.xMax; x += xStep) {
                if (Math.abs(x) < 0.0001) continue;
                
                const { pixelX } = this.mathToPixel(x, 0);
                this.ctx.fillText(x.toFixed(2), pixelX, pixelY + 15);
            }
        }
        
        // Y-axis labels
        if (this.xMin <= 0 && this.xMax >= 0) {
            const { pixelX } = this.mathToPixel(0, 0);
            
            for (let y = Math.ceil(this.yMin / yStep) * yStep; y <= this.yMax; y += yStep) {
                if (Math.abs(y) < 0.0001) continue;
                
                const { pixelY } = this.mathToPixel(0, y);
                this.ctx.fillText(y.toFixed(2), pixelX - 15, pixelY + 4);
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
        this.ctx.lineWidth = 3;
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
        statusDiv.className = type;
    }
    
    // Handle zoom with mouse wheel
    handleZoom(e) {
        e.preventDefault();
        
        const zoomFactor = e.deltaY > 0 ? 1.2 : 0.8;
        const { x, y } = this.pixelToMath(e.offsetX, e.offsetY);
        
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        
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
            const funcY = this.evaluateFunction(func, x);
            if (isFinite(funcY)) {
                this.showStatus(`النقطة: (${x.toFixed(3)}, ${y.toFixed(3)}) | الدالة عند x=${x.toFixed(3)}: ${funcY.toFixed(3)}`, 'success');
            } else {
                this.showStatus(`النقطة: (${x.toFixed(3)}, ${y.toFixed(3)})`, 'success');
            }
        } else {
            this.showStatus(`النقطة: (${x.toFixed(3)}, ${y.toFixed(3)})`, 'success');
        }
    }
    
    // Pan functionality
    startPan(e) {
        this.isPanning = true;
        this.panStartX = e.clientX;
        this.panStartY = e.clientY;
        this.panStartXMin = this.xMin;
        this.panStartYMin = this.yMin;
    }
    
    pan(e) {
        if (!this.isPanning) return;
        
        const deltaX = e.clientX - this.panStartX;
        const deltaY = e.clientY - this.panStartY;
        
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        
        const deltaXMath = -(deltaX / this.width) * xRange;
        const deltaYMath = (deltaY / this.height) * yRange;
        
        this.xMin = this.panStartXMin + deltaXMath;
        this.xMax = this.xMin + xRange;
        this.yMin = this.panStartYMin + deltaYMath;
        this.yMax = this.yMin + yRange;
        
        // Update input fields
        document.getElementById('xMin').value = this.xMin.toFixed(2);
        document.getElementById('xMax').value = this.xMax.toFixed(2);
        document.getElementById('yMin').value = this.yMin.toFixed(2);
        document.getElementById('yMax').value = this.yMax.toFixed(2);
        
        this.plotFunction();
    }
    
    stopPan() {
        this.isPanning = false;
    }
    
    // Make view square
    makeViewSquare() {
        const xRange = this.xMax - this.xMin;
        const yRange = this.yMax - this.yMin;
        const maxRange = Math.max(xRange, yRange);
        
        const centerX = (this.xMin + this.xMax) / 2;
        const centerY = (this.yMin + this.yMax) / 2;
        
        this.xMin = centerX - maxRange / 2;
        this.xMax = centerX + maxRange / 2;
        this.yMin = centerY - maxRange / 2;
        this.yMax = centerY + maxRange / 2;
        
        // Update input fields
        document.getElementById('xMin').value = this.xMin.toFixed(2);
        document.getElementById('xMax').value = this.xMax.toFixed(2);
        document.getElementById('yMin').value = this.yMin.toFixed(2);
        document.getElementById('yMax').value = this.yMax.toFixed(2);
        
        this.plotFunction();
    }
    
    // Main plotting function
    plotFunction() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Update ranges from input fields
        this.updateRanges();
        
        // Draw grid, axes, and function
        this.drawGrid();
        this.drawAxes();
        this.drawFunction();
    }
}

// Global helper functions
function zoomIn() {
    const zoomFactor = 0.8;
    const xRange = app.xMax - app.xMin;
    const yRange = app.yMax - app.yMin;
    
    app.xMin += xRange * (1 - zoomFactor) / 2;
    app.xMax -= xRange * (1 - zoomFactor) / 2;
    app.yMin += yRange * (1 - zoomFactor) / 2;
    app.yMax -= yRange * (1 - zoomFactor) / 2;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function zoomOut() {
    const zoomFactor = 1.2;
    const xRange = app.xMax - app.xMin;
    const yRange = app.yMax - app.yMin;
    
    app.xMin -= xRange * (zoomFactor - 1) / 2;
    app.xMax += xRange * (zoomFactor - 1) / 2;
    app.yMin -= yRange * (zoomFactor - 1) / 2;
    app.yMax += yRange * (zoomFactor - 1) / 2;
    
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
}

function panUp() {
    const yRange = app.yMax - app.yMin;
    const panAmount = yRange * 0.1;
    
    app.yMin += panAmount;
    app.yMax += panAmount;
    
    // Update input fields
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function panDown() {
    const yRange = app.yMax - app.yMin;
    const panAmount = yRange * 0.1;
    
    app.yMin -= panAmount;
    app.yMax -= panAmount;
    
    // Update input fields
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function panLeft() {
    const xRange = app.xMax - app.xMin;
    const panAmount = xRange * 0.1;
    
    app.xMin -= panAmount;
    app.xMax -= panAmount;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    
    app.plotFunction();
}

function panRight() {
    const xRange = app.xMax - app.xMin;
    const panAmount = xRange * 0.1;
    
    app.xMin += panAmount;
    app.xMax += panAmount;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    
    app.plotFunction();
}

function panCenter() {
    const xRange = app.xMax - app.xMin;
    const yRange = app.yMax - app.yMin;
    
    app.xMin = -xRange / 2;
    app.xMax = xRange / 2;
    app.yMin = -yRange / 2;
    app.yMax = yRange / 2;
    
    // Update input fields
    document.getElementById('xMin').value = app.xMin.toFixed(2);
    document.getElementById('xMax').value = app.xMax.toFixed(2);
    document.getElementById('yMin').value = app.yMin.toFixed(2);
    document.getElementById('yMax').value = app.yMax.toFixed(2);
    
    app.plotFunction();
}

function setFunction(func) {
    document.getElementById('functionInput').value = func;
    app.plotFunction();
}

function plotFunction() {
    app.plotFunction();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app = new GraphingApp();
});

// Handle window resize
window.addEventListener('resize', () => {
    // For desktop version, we don't need to resize canvas
    // But we can update the display if needed
    console.log('Window resized - desktop version maintains fixed canvas size');
});

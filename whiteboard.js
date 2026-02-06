document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('whiteboard-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = document.getElementById('whiteboard-container');
    const toggleBtn = document.getElementById('wb-toggle'); // Floating button

    // Tools
    const btnPen = document.getElementById('wb-pen');
    const btnEraser = document.getElementById('wb-eraser');
    const btnClear = document.getElementById('wb-clear');
    const btnClose = document.getElementById('wb-close');

    // State
    let isDrawing = false;
    let currentTool = 'pen'; // 'pen', 'eraser'
    let lastX = 0;
    let lastY = 0;

    // Config
    const PEN_COLOR = '#2d3436';
    const PEN_WIDTH = 3;
    const ERASER_WIDTH = 30;

    // Resize Canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Toggle Visibility
    function toggleWhiteboard() {
        container.classList.toggle('hidden');
        if (!container.classList.contains('hidden')) {
            resizeCanvas();
            // Default to pen active
            activateTool('pen');
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleWhiteboard);
    }

    if (btnClose) {
        btnClose.addEventListener('click', () => {
            container.classList.add('hidden');
        });
    }

    // Tool Activation
    function activateTool(tool) {
        currentTool = tool;
        // visual update
        btnPen.classList.toggle('active', tool === 'pen');
        btnEraser.classList.toggle('active', tool === 'eraser');

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (tool === 'pen') {
            ctx.strokeStyle = PEN_COLOR;
            ctx.lineWidth = PEN_WIDTH;
            ctx.globalCompositeOperation = 'source-over';
        } else if (tool === 'eraser') {
            ctx.strokeStyle = 'rgba(0,0,0,1)'; // Color doesn't matter for destination-out
            ctx.lineWidth = ERASER_WIDTH;
            ctx.globalCompositeOperation = 'destination-out';
        }
    }

    if (btnPen) btnPen.addEventListener('click', () => activateTool('pen'));
    if (btnEraser) btnEraser.addEventListener('click', () => activateTool('eraser'));
    if (btnClear) btnClear.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Drawing Functions
    function getPos(e) {
        // Handle touch and mouse
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
        return {
            x: e.clientX,
            y: e.clientY
        };
    }

    function startDrawing(e) {
        isDrawing = true;
        const pos = getPos(e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault(); // Stop scrolling on touch

        const pos = getPos(e);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        lastX = pos.x;
        lastY = pos.y;
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.closePath();
    }

    // Events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
});

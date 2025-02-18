export default function capturePhoto(){
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let stream = null;
// 1. Access the webcam
function startCamera() {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((videoStream) => {
            stream = videoStream;
            video.srcObject = stream;
              
            video.onloadedmetadata = () => {
                // Now the video is ready to be used
                console.log("Video metadata loaded, starting capture.");
                setTimeout(() => {
                  capturePhoto();
                   // Capture after 3 seconds
                }, 1000);
            };

            // Handle errors for video loading
            video.onerror = (err) => {
                console.error("Error loading video stream:", err);
            };
        })
        .catch((err) => console.error("Error accessing camera:", err));

        return;
}

        
        


function capturePhoto() {
    if (video.videoWidth === 0 || video.videoHeight === 0) {
        console.error("Video not ready yet!");
        stopCamera();
        return;
    }

    // Set canvas size to match video frame
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to Base64 and save to localStorage
    const imageData = canvas.toDataURL("image/png");
    localStorage.setItem("capturedImage", imageData);
    console.log("Image captured and saved to localStorage.");
    imageUrl=imageData
    // Load and show the saved image
    //loadSavedImage();

    // Stop the camera
    stopCamera();
    
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach((track) => track.stop()); // Stop all tracks
        video.srcObject = null; // Remove video stream
        video.style.display = "none"; // Hide video element
    }
}

function loadSavedImage() {
    const savedData = localStorage.getItem("capturedImage");
    if (savedData) {
        image.src = savedData;
        image.style.display = "block"; // Ensure the image is visible
    }
}
startCamera()

}
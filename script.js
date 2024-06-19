// Create the scene
const scene = new THREE.Scene();

// Create a camera, which determines what we'll see when we render the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Create a renderer and add it to our document
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('penguin-container').appendChild(renderer.domElement);

// Create the penguin body
const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

// Create the penguin head
const headGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1;
scene.add(head);

// Create the penguin beak
const beakGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
const beakMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const beak = new THREE.Mesh(beakGeometry, beakMaterial);
beak.position.y = 1;
beak.position.z = 0.35;
beak.rotation.x = Math.PI / 2;
scene.add(beak);

// Function to animate our scene
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the penguin
    body.rotation.y += 0.01;
    head.rotation.y += 0.01;
    beak.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


const securityMode = "SANCTUARY";
console.log(`Estado del servidor: ${securityMode}`);

cat >> main.js <<'EOF'
const doorsLocked = true;
console.log("Doors locked:", doorsLocked);
EOF
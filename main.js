const securityMode = "INITIAL";
console.log(`Estado del servidor: ${securityMode}`);
EOF

cat >> main.js <<'EOF'
const doorsLocked = true;
console.log("Doors locked:", doorsLocked);
EOF
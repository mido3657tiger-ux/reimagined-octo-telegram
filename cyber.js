const { exec } = require('child_process');

module.exports = {
    runScan: (target, callback) => {
        // Nmap Service Detection Scan
        exec(`nmap -sV -T4 ${target}`, (error, stdout, stderr) => {
            callback(stdout || stderr || "No data returned.");
        });
    },
    runVulnCheck: (target, callback) => {
        // Advanced Vulnerability Script Scanning
        exec(`nmap -sV --script=vuln ${target}`, (error, stdout, stderr) => {
            callback(stdout || stderr || "Scan failed or target secured.");
        });
    },
    runNikto: (target, callback) => {
        exec(`nikto -h ${target}`, (error, stdout, stderr) => {
            callback(stdout || stderr);
        });
    }
};


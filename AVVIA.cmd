@echo off
title Eugenio Ciullo - Portfolio
cd /d "%~dp0"
echo Avvio sito Eugenio Ciullo...
if not exist node_modules (
  echo Installazione dipendenze...
  call npm install --strict-ssl=false
)
start "" http://localhost:3000
npm run dev

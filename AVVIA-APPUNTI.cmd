@echo off
title Eugenio Ciullo - Appunti Cliente
cd /d "%~dp0"
echo.
echo Avvio quaderno digitale Appunti Cliente
echo Apri dal telefono: http://TUO-IP-LOCALE:3000/appunti
echo.
if not exist node_modules (
  echo Installazione dipendenze...
  call npm install --strict-ssl=false
)
start "" http://localhost:3000/appunti
npm run dev

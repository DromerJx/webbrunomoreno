const express = require('express');
const ExcelJS = require('exceljs');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/generar', async (req, res) => {

    const { solicitante, prioridad, ticket, fecha, itResponsable, tipoSolicitud, articulo, descripcion, total, observaciones } = req.body;

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('plantilla.xlsx');
    const sheet = workbook.getWorksheet(1);

    sheet.getCell('B6').value = solicitante;
    sheet.getCell('F6').value = prioridad;
    sheet.getCell('H6').value = ticket;
    sheet.getCell('B8').value = fecha;
    sheet.getCell('F8').value = itResponsable;
    sheet.getCell('C10').value = tipoSolicitud;
    sheet.getCell('A16').value = articulo;
    sheet.getCell('C16').value = descripcion;
    sheet.getCell('H16').value = Number(total);
    sheet.getCell('B24').value = observaciones;
    
    const excelPath = path.join(__dirname, 'cotizacion.xlsx');
    await workbook.xlsx.writeFile(excelPath);

    exec(`soffice --headless --convert-to pdf "${excelPath}" --outdir "${__dirname}"`, (err) => {

        if (err) {
            console.error("Error LibreOffice:", err);
            return res.send("Error al convertir: " + err.message);
        }

        res.download(path.join(__dirname, 'cotizacion.pdf'));
    });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
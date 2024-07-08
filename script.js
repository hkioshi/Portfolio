const Paleta =
{
    cor1 : "#1a1e29",
    cor2 : "#132d46",
    cor4 : "#01c38e",
    cor4 : "#ffffff"

    
}



function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'pdfs/Curriculo - Henrique Kioshi Yamauchi.pdf';
    link.download = 'Curriculo - Henrique Kioshi Yamauchi.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
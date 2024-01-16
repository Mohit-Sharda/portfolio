function openAndDownloadPDF() {
           
    var pdfPath = 'Mohit Sharda-cap06_128-Frontend Developer.pdf';

    
    window.open(pdfPath, '_blank');

    var downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'Mohit Sharda-cap06_128-Resume';

    downloadLink.click();
}
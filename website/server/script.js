async function descargarDesdeGithub(url, nombreArchivo) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(`Error en descarga: ${response.statusText}`);

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = nombreArchivo;
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(blobUrl);
        a.remove();
    } catch (err) {
        console.error('Fallo la descarga:', err);
        alert('Hubo un error al intentar descargar el archivo.');
    }
}

document.getElementById('btn-android').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/USUARIO/REPO/main/app-release.apk'; 
    descargarDesdeGithub(url, 'SAMNU.apk');
});

document.getElementById('btn-windows').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/USUARIO/REPO/main/installer.exe'; 
    descargarDesdeGithub(url, 'SAMNU.exe');
});

document.getElementById('btn-manual').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf'; 
    descargarDesdeGithub(url, 'Manual_SAMNU.pdf');
});
function forzarDescarga(url) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('btn-android').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/SamnuAndroid/Samnu.apk';
    forzarDescarga(url);
});

document.getElementById('btn-windows').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/SamnuWindows/Samnu.rar';
    forzarDescarga(url);
});

document.getElementById('btn-manual').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf';
    forzarDescarga(url);
});
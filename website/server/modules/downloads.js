function forceDownload(url) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function initDownloadButtons() {
    document.getElementById('btn-android')?.addEventListener('click', () => {
        const url = 'https://release-assets.githubusercontent.com/github-production-release-asset/1150943887/e0d228f8-e9d0-49ed-ae26-fde533e15afd?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-04-17T01%3A24%3A22Z&rscd=attachment%3B+filename%3DSAMNU-Android.-1.1.4-.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-04-17T00%3A23%3A54Z&ske=2026-04-17T01%3A24%3A22Z&sks=b&skv=2018-11-09&sig=W77eRA8GcTXj1V5guucfhoWfAaCsGtKRSsFxSENqtFY%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NjM4NzIzNCwibmJmIjoxNzc2Mzg1NDM0LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.uTiae6GfEw6kYHu5vV8J0t2ZsIqhxlOhjkLF-b7uYiw&response-content-disposition=attachment%3B%20filename%3DSAMNU-Android.-1.1.4-.apk&response-content-type=application%2Fvnd.android.package-archive';
        forceDownload(url);
    });

    document.getElementById('btn-windows')?.addEventListener('click', () => {
        const url = 'https://release-assets.githubusercontent.com/github-production-release-asset/1150943887/8429ed94-938c-498a-8951-886cfa203d4b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-04-17T01%3A22%3A49Z&rscd=attachment%3B+filename%3DSAMNU-Windows-1.1.4-.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-04-17T00%3A22%3A22Z&ske=2026-04-17T01%3A22%3A49Z&sks=b&skv=2018-11-09&sig=Bs19sDukNVTtXIEUkTCkBdTDmt%2BMWQf%2FBXeeT3zBsKw%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NjM4NzI5MCwibmJmIjoxNzc2Mzg1NDkwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.WGMPePleiGjAXlcElgkZc4AlOFAelXm27afsLbk3FfY&response-content-disposition=attachment%3B%20filename%3DSAMNU-Windows-1.1.4-.exe&response-content-type=application%2Foctet-stream';
        forceDownload(url);
    });

    document.getElementById('btn-manual')?.addEventListener('click', () => {
        const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf';
        forceDownload(url);
    });
}

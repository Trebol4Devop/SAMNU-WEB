function forzarDescarga(url) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("btn-android").addEventListener("click", () => {
  const url =
    "https://github.com/Trebol4Devop/SAMNU/releases/download/v1.1.2/SAMNU-Android.apk";
  forzarDescarga(url);
});

document.getElementById("btn-windows").addEventListener("click", () => {
  const url =
    "https://github.com/Trebol4Devop/SAMNU/releases/download/v1.1.2/SAMNU-Windows.zip";
  forzarDescarga(url);
});

document.getElementById("btn-manual").addEventListener("click", () => {
  const url =
    "https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf";
  forzarDescarga(url);
});

import { renderToString } from "react-dom/server";

// Strings

import Logo from "components/atoms/Logo";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import html2canvas from "html2canvas";

export function filterPlayers(str) {
  const regex = /[a-zÀ-ÿ\s]+/gi;

  const players = [];
  let m;

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match) => {
      const cleanedPlayerName = match.toLowerCase().trim();
      players.push(cleanedPlayerName);
    });
  }

  const cleanPlayersList = players
    .toString()
    .replace(/\n/g, ",")
    .split(",")
    .filter((item) => item);

  const duplicatesRemoved = new Set(cleanPlayersList);

  return [...duplicatesRemoved];
}

export const trucanteString = (str, maxChar) => {
  if (str.length > maxChar) {
    return str.substring(0, maxChar) + "...";
  }
  return str;
};

// Files

export function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

// Dates

// Convert from firebase timestamp to Date
export function convertTimestampToDate(timestamp) {
  const date = new Date(timestamp.toDate());
  return `${format(date, "EEEE dd/MM - p", { locale: es })} hs`;
}

// Images

export const generateShareImage = async (component, matchURL) => {
  const canvas = await html2canvas(component, {
    allowTaint: true,
    removeContainer: true,
    backgroundColor: "#171f6d",
    height: component.offsetHeight + 70,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: -50,
    windowWidth: 650,
    width: 666,
    scale: 1,

    onclone: (clone) => {
      const content = clone.querySelector(".screenshot");

      content.classList.add("shared");

      const logo = (
        <div className="header">
          <Logo width={200} dark />
        </div>
      );
      const stringComponent = renderToString(logo);

      return content.insertAdjacentHTML("afterbegin", stringComponent);
    },
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.6);
  const file = dataURLtoFile(imgData, "photo.jpg");

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Team Maker",
        text: "Compartido desde Team Maker",
        url: matchURL,
        files: [file],
      });
    }
  } catch (e) {
    console.log("Error sharing list.");
  }
};

console.log("JS loaded!");
const button = document.getElementById('vypocet');
const result = document.querySelector('.result');
const EE = document.querySelector('.EE');

function loveScore(name1, name2) {
  const special = ["c++", "c", "cpp", "linux", "archlinux", "arch", "linus torvalds", "tux", "gnu", "kernel", "bash",
     "zsh", "unix", "debian", "fedora", "ubuntu", "red hat", "gentoo", "suse", "mint", "manjaro", "void linux", "alpine linux", 
     "elementary os", "pop!_os", "kali linux", "tails", "parrot os", "deepin", "solus", "clear linux", "nixos", "slackware", "mageia", 
     "pclinuxos", "bodhi linux", "antiX", "peppermint os", "lxle", "siduction", "kaos", "archbang", "archlabs", "arcolinux", "antergos", 
     "blackarch", "backbox", "parabola", "dragora", "gnewsense", "blag", "chakra", "calculate linux", "devuan", "freespire", "galliumos", 
     "korora", "linuxfx", "linux mint debian edition", "mageia", "nitrux", "openmandriva", "rosalina os", "solydxk", "ubuntu studio", 
     "ubuntukylin", "ubuntumate", "ubuntutouch", "xubuntu", "kali", "linux", "grussmann", "torvalds", "grussy", "gruss", "grussman"];
      // EasterEgg - If either name is Martin...
    if (name1.trim().toLowerCase() === "martin" || name2.trim().toLowerCase() === "martin") {
        const other = name1.trim().toLowerCase() === "martin" ? name2 : name1;
        if (special.includes(other.trim().toLowerCase())) {
            return 100;
        }
        return 0;
    }
  const combined = [name1.trim().toLowerCase(), name2.trim().toLowerCase()]
    .sort()
    .join('');

  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0; 
  }

  return Math.abs(hash) % 101;
}

button.addEventListener('click', () => {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  const score = loveScore(name1, name2);
  if (name1.trim().toLowerCase() === "martin" || name2.trim().toLowerCase() === "martin") {
    result.innerText = `Kompatibilita: ${score}% ❤️\n 
    Martinova jediná pravá láska je linux ❤️🐧`;
  } else {
  result.innerText = `Kompatibilita: ${score}% ❤️`;
  }
});









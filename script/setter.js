const TrimType = document.getElementById("trim-slider");
const TrimOreType = document.getElementById("trim-ore-slider");

const trims = [
    "Netherite Upgrade",
    "Coast Armour Trim",
    "Dune Armour Trim",
    "Eye Armour Trim",
    "Host Armour Trim",
    "Raiser Armour Trim",
    "Rib Armour Trim",
    "Sentry Armour Trim",
    "Shaper Armour Trim",
    "Silence Armour Trim",
    "Snout Armour Trim",
    "Spire Armour Trim",
    "Tide Armour Trim",
    "Vex Armour Trim",
    "Ward Armour Trim",
    "Wayfinder Armour Trim",
    "Wild Armour Trim",
];

const ores = [
    "Amethist Shard",
    "Copper Ingot",
    "Diamond",
    "Emerald",
    "Gold Ingot",
    "Iron Ingot",
    "Lapis Lazuli",
    "Netherite Ingot",
    "Quartz",
    "Redstone Dust",
];

const trimfiles = [
    "netherite.png",
    "coast.png",
    "dune.png",
    "eye.png",
    "host.png",
    "raiser.png",
    "rib.png",
    "sentry.png",
    "shaper.png",
    "silence.png",
    "snout.png",
    "spire.png",
    "tide.png",
    "vex.png",
    "ward.png",
    "wayfinder.png",
    "wild.png"
];

const orefiles = [
    "amethyst.png",
    "copper.png",
    "diamond.png",
    "emerald.png",
    "gold.png",
    "iron.png",
    "lapis.png",
    "netherite.png",
    "quartz.png",
    "redstone.png",
];

function filterarmour(params) {
    let ret = [];
    for (let i = 0; i < armours.length; i++) {
        if (armours[i].includes(params)) {
            ret.push(i)
        }        
    }
    return ret;
}

const armours = [
    "no boots",
    "no chestplate",
    "no helmet",
    "no leggings",
    "netherite boots",
    "netherite chestplate",
    "netherite helmet",
    "netherite leggings",
    "diamond boots",
    "diamond chestplate",
    "diamond helmet",
    "diamond leggings",
    "iron boots",
    "iron chestplate",
    "iron helmet",
    "iron leggings",
    "golden boots",
    "golden chestplate",
    "golden helmet",
    "golden leggings",
    "chainmail boots",
    "chainmail chestplate",
    "chainmail helmet",
    "chainmail leggings",
    "leather boots",
    "leather chestplate",
    "leather helmet",
    "leather leggings",
    "turtle helmet"
];

const armoursfiles = [
    "empty_armor_slot_boots.png",
    "empty_armor_slot_chestplate.png",
    "empty_armor_slot_helmet.png",
    "empty_armor_slot_leggings.png",
    "netherite_boots.png",
    "netherite_chestplate.png",
    "netherite_helmet.png",
    "netherite_leggings.png",
    "diamond_boots.png",
    "diamond_chestplate.png",
    "diamond_helmet.png",
    "diamond_leggings.png",
    "iron_boots.png",
    "iron_chestplate.png",
    "iron_helmet.png",
    "iron_leggings.png",
    "golden_boots.png",
    "golden_chestplate.png",
    "golden_helmet.png",
    "golden_leggings.png",
    "chainmail_boots.png",
    "chainmail_chestplate.png",
    "chainmail_helmet.png",
    "chainmail_leggings.png",
    "leather_boots.png",
    "leather_chestplate.png",
    "leather_helmet.png",
    "leather_leggings.png",
    "turtle_helmet.png"
];

let inhtml = "";
for (let i = 0; i < trims.length; i++) {
    inhtml += `<li><img src="../media/armour trims/${trimfiles[i]}" alt="${trims[i]}" title="${trims[i]}"></li>`;    
}
TrimType.innerHTML = inhtml;

inhtml = "";
for (let i = 0; i < ores.length; i++) {
    inhtml += `<li><img src="../media/ore/${orefiles[i]}" alt="${ores[i]}" title="${ores[i]}"></li>`;    
}
TrimOreType.innerHTML = inhtml;


function filtername(params) {
    let ret = [];
    for (let i = 0; i < armours.length; i++) {
        if (armours[i].includes(params)) {
            ret.push(i)
        }        
    }
    return ret
}

let selected = filterarmour("helmet")
inhtml = "";
for (let i = 0; i < selected.length; i++) {
    inhtml += `<img height=60 class="sel-it" onclick="seter(0,${selected[i]})" width=60 title="${armours[selected[i]]}" src="../media/armour/${armoursfiles[selected[i]]}" ">`;
}
document.getElementsByClassName("opt")[0].innerHTML = inhtml;

selected = filterarmour("chestplate")
inhtml = "";
for (let i = 0; i < selected.length; i++) {
    inhtml += `<img height=60 class="sel-it" onclick="seter(1,${selected[i]})" width=60 title="${armours[selected[i]]}" src="../media/armour/${armoursfiles[selected[i]]}" ">`;
}
document.getElementsByClassName("opt")[1].innerHTML = inhtml;

selected = filterarmour("leggings")
inhtml = "";
for (let i = 0; i < selected.length; i++) {
    inhtml += `<img height=60 class="sel-it" onclick="seter(2,${selected[i]})" width=60 title="${armours[selected[i]]}" src="../media/armour/${armoursfiles[selected[i]]}" ">`;
}
document.getElementsByClassName("opt")[2].innerHTML = inhtml;

selected = filterarmour("boots")
inhtml = "";
for (let i = 0; i < selected.length; i++) {
    inhtml += `<img height=60 class="sel-it" onclick="seter(3,${selected[i]})" width=60 title="${armours[selected[i]]}" src="../media/armour/${armoursfiles[selected[i]]}" ">`;
}
document.getElementsByClassName("opt")[3].innerHTML = inhtml;

function reveal(ind) {
    let divis = document.getElementsByClassName("opt");
    if (divis[ind].style.display == "flex") {
        divis[ind].style.display = "none";
    } else {
        divis[ind].style.display = "flex";
    }
}

function seter(cla,i) {
    document.getElementsByClassName("selected-ar")[cla].src = `../media/armour/${armoursfiles[i]}` ;
}
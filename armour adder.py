from tkinter.filedialog import askopenfilename
import json

trims = ["netherite","coast","dune","spire","vex","rib","ward","silence","sentry","tide","wayfinder","raiser","eye","snout","wild","shaper","host",]
ores = ["amethist","copper","diamond","emreld","gold","iron","lapis","netherite","quartz","redstone",]
armourtypes = ["leather","chainmail","iron","gold","diamond","netherite","turtle helmet",]
armours = ["helmet","chestplate","leggings","boots",]

trim = input("trim : ")
if not(trim in trims):
    print("Error")

ore = input("ore : ")
if not(ore in ores):
    print("Error")

armourtype = input("armourtype : ")
if not(armourtype in armourtypes):
    print("Error")

armour = input("armour : ")
if not(armour in armours):
    print("Error")

tags = [trim,ore,armourtype,armour]

exts = (("png",".png"),("jpg",".jpg"),("jpeg",".jpeg"),("all files","*.*"),)
obj = {
    "tags":tags,
    "filepath":input("filepath : ")
}

datafile = "data.json"
with open(datafile) as fob:
    data = json.load(fob)

data.append(obj)
with open(datafile,'w') as fob:
    job = json.dumps(data,indent=4)
    fob.write(job)
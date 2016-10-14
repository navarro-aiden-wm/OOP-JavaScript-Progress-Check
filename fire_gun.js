/**
 * Created by session2 on 10/12/16.
 */
//var Gun = {
//        name: "Kar98k",
//        country: "Germany",
//        weapon_class: "bolt-action rifle",
//        ammo: "7.92×57mm Mauser";
//displayGun: function() {
//    console.log ("My gun is a " + this.name + ", it's from" + this.country + ". It is a " + this.weapon_class + ", and fires " + this.ammo + "<br><br>");
//}
//
//}

var Gun = function(name, country, weapon_class, ammo) {
    this.name = name;
    this.country = country;
    this.weapon_class = weapon_class;
    this.ammo = ammo;
};

Gun.prototype.displayGun = function() {
    document.write("<input type ='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + "\'><br><br>");
    this.fireGun();
};

Gun.prototype.fireGun = function() {
    document.write("<textarea rows= '6' cols= '50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.name).innerHTML = "Cannot fire a " + this.name;
};

function Kar98k(name, country, weapon_class, ammo, nbrRounds) {

    Gun.call(this, name, country, weapon_class, ammo);

    this.nbrRounds = nbrRounds;
}

Kar98k.prototype = Object.create(Gun.prototype);

Kar98k.prototype.constructor = Kar98k;

Kar98k.prototype.displayGun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + ", and has " + this.nbrRounds + " rounds in the clip"  + "\'><br><br>");
    this.fireGun();
};

Kar98k.prototype.fireGun = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    for (var round = 1; round <= this.nbrRounds; round++) {
        output += "Round " + round + " fired\n";
    }
    output += "Gun clip empty";
    document.getElementById(this.name).innerHTML = output;
};

function UMP45(name, country, weapon_class, ammo, nbrRounds) {

    Gun.call(this, name, country, weapon_class, ammo);

    this.nbrRounds = nbrRounds;
}

UMP45.prototype = Object.create(Gun.prototype);

UMP45.prototype.constructor = UMP45;

UMP45.prototype.displayGun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + ", and has " + this.nbrRounds + " rounds in the clip"  + "\'><br><br>");
    this.fireGun();
};

UMP45.prototype.fireGun = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    for (var round = 1; round <= this.nbrRounds; round++) {
        output += "Round " + round + " fired\n";
    }
    output += "Gun clip empty";
    document.getElementById(this.name).innerHTML = output;
};

function FGM_148(name, country, weapon_class, ammo, nbrMissiles) {

    Gun.call(this, name, country, weapon_class, ammo);

    this.nbrRounds = nbrMissiles;
}

FGM_148.prototype = Object.create(Gun.prototype);

FGM_148.prototype.constructor = FGM_148;

FGM_148.prototype.displayGun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + ", and has " + this.nbrRounds + " rounds in the chamber"  + "\'><br><br>");
    this.fireGun();
};

FGM_148.prototype.fireGun = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    for (var missile = 1; missile <= this.nbrRounds; missile++) {
        output += "Missile " + missile + " launched\n";
    }
    output += "Weapon chamber empty";
    document.getElementById(this.name).innerHTML = output;
};

function M777_howitzer(name, country, weapon_class, ammo, nbrShots) {

    Gun.call(this, name, country, weapon_class, ammo);

    this.nbrRounds = nbrShots;
}

M777_howitzer.prototype = Object.create(Gun.prototype);

M777_howitzer.prototype.constructor = M777_howitzer;

M777_howitzer.prototype.displayGun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + ", and has " + this.nbrRounds + " rounds in the chamber"  + "\'><br><br>");
    this.fireGun();
};

M777_howitzer.prototype.fireGun = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    for (var shot = 1; shot <= this.nbrRounds; shot++) {
        output += "Shot " + shot + " fired\n";
    }
    output += "Weapon chamber empty";
    document.getElementById(this.name).innerHTML = output;
};

function M16A2(name, country, weapon_class, ammo, nbrRounds) {

    Gun.call(this, name, country, weapon_class, ammo);

    this.nbrRounds = nbrRounds;
}

M16A2.prototype = Object.create(Gun.prototype);

M16A2.prototype.constructor = M16A2;

M16A2.prototype.displayGun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + ": weapon class = " + this.weapon_class + ", origin: " + this.country + ", ammo: " + this.ammo + ", and has " + this.nbrRounds + " rounds in the clip"  + "\'><br><br>");
    this.fireGun();
};

M16A2.prototype.fireGun = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    for (var round = 1; round <= this.nbrRounds; round++) {
        output += "Round " + round + " fired\n";
    }
    output += "Weapon clip empty";
    document.getElementById(this.name).innerHTML = output;
};

function main() {
    var gunArray = [];

    gunArray[0]= new Gun("generic gun", "N/A", "N/A", 0);
    gunArray[1]= new Kar98k("Kar98k", "Germany", "blot-action rifle", "7.92×57mm Mauser", 5);
    gunArray[2]= new UMP45("UMP45", "Germany", "Submachine gun", "9mm", 30);
    gunArray[3]= new FGM_148("FGM_148 Javelin", "United States", "Anti-tank Missile", "Self Guided Missile", 1);
    gunArray[4]= new M777_howitzer("M777_howitzer", "United Kingdom", "Howitzer", "155 mm M107", 1);
    gunArray[5]= new M16A2("M16A2", "United States", "Assault Rifle", "5.56×45mm NATO", 20);
    for (var i = 0; i < gunArray.length; i++) {
        gunArray[i].displayGun();
    }

}
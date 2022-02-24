import { Creature } from "../../models/index.js"

class CreatureSeeder {

  static async seed() {
    const creatureData = [
      {
        name: "Commoner",
        CR: 0,
        HP: 4,
        AC: 10,
        speed: 30,
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
        strSave: 0,
        dexSave: 0,
        conSave: 0,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: "Club: Attack Bonus: +2, range:5ft, (1d4) bludgeoning damage "
      },
      {
        name: "Bandit",
        CR: 1/8,
        HP: 11,
        AC: 12,
        speed: 30,
        str: 11,
        dex: 12,
        con: 12,
        int: 10,
        wis: 10,
        cha: 10,
        strSave: 0,
        dexSave: 1,
        conSave: 1,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: `Scimitar. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.\n
        Light Crossbow. Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.`
      },
      {
        name: "Cultist",
        CR: 1/8,
        HP: 9,
        AC: 12,
        speed: 30,
        str: 11,
        dex: 12,
        con: 10,
        int: 10,
        wis: 11,
        cha: 10,
        strSave: 0,
        dexSave: 1,
        conSave: 0,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: "Scimitar: Attack Bonus: +3, range:5ft, (1d6+1)slashing damage"
      },
      {
        name: "Guard",
        CR:1/8,
        HP: 11,
        AC: 16,
        speed: 30,
        str: 13,
        dex: 12,
        con: 12,
        int: 10,
        wis: 11,
        cha: 10,
        strSave: 1,
        dexSave: 1,
        conSave: 1,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions:`Spear. Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.`
      },
      {
        name: "Noble",
        CR: 1/8,
        HP: 9,
        AC: 15,
        speed:30 ,
        str: 11,
        dex: 12,
        con: 11,
        int: 12,
        wis: 14,
        cha: 16,
        strSave: 0,
        dexSave: 1,
        conSave: 0,
        intSave: 1,
        wisSave: 2,
        chaSave: 3,
        actions: `Rapier. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.`
      },
      {
        name: "Tribal Warrior",
        CR: 1/8,
        HP: 11,
        AC: 12,
        speed: 30,
        str: 13,
        dex: 11,
        con: 12,
        int: 8,
        wis: 11,
        cha: 8,
        strSave: 1,
        dexSave: 0,
        conSave: 1,
        intSave: -1,
        wisSave: 0,
        chaSave: -1,
        actions: `Spear. Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.`
      },
      {
        name: "Acolyte",
        CR: 1/4,
        HP: 9,
        AC: 10,
        speed: 30,
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 14,
        cha: 11,
        strSave: 0,
        dexSave: 0,
        conSave: 0,
        intSave: 0,
        wisSave: 2,
        chaSave: 0,
        actions: `Spellcasting. The acolyte is a 1st-level spellcaster.
        Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). 
        
        The acolyte has following cleric spells prepared:
        Cantrips (at will): light, sacred flame, thaumaturgy
        1st level (3 slots): bless, cure wounds, sanctuary
        Club. Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.`
      },
      {
        name: "Scout",
        CR: 1/2,
        HP: 16,
        AC: 13,
        speed: 30,
        str: 11,
        dex: 14,
        con: 12,
        int: 11,
        wis: 13,
        cha: 11,
        strSave: 0,
        dexSave: 2,
        conSave: 1,
        intSave: 0,
        wisSave: 1,
        chaSave: 0,
        actions: `Multiattack. The scout makes two melee attacks or two ranged attacks.

        Shortsword. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.
        
        Longbow. Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.`
      },
      {
        name: "Thug",
        CR: 1/2,
        HP: 32,
        AC: 11,
        speed: 30,
        str: 15,
        dex: 11,
        con: 14,
        int: 10,
        wis: 10,
        cha: 11,
        strSave: 2,
        dexSave: 0,
        conSave: 2,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: `Multiattack. The thug makes two melee attacks.

        Mace. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage.
        
        Heavy Crossbow. Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.`
      },
      {
        name: "Spy",
        CR: 1,
        HP: 27,
        AC: 12,
        speed: 30,
        str: 10,
        dex: 15,
        con: 10,
        int: 12,
        wis: 14,
        cha: 16,
        strSave: 0,
        dexSave: 2,
        conSave: 0,
        intSave: 1,
        wisSave: 2,
        chaSave: 3,
        actions: `Cunning Action. On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.
      
        Sneak Attack (1/Turn). The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.
        Multiattack. The spy makes two melee attacks.
      
        Shortsword. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.
      
        Hand Crossbow. Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.`
      },
      {
        name: "Bandit Captain",
        CR: 2,
        HP: 65,
        AC: 15,
        speed: 30,
        str: 15,
        dex: 16,
        con: 14,
        int: 14,
        wis: 11,
        cha: 14,
        strSave: 4,
        dexSave: 5,
        conSave: 2,
        intSave: 2,
        wisSave: 2,
        chaSave: 2,
        actions: "Scimitar: Attack Bonus:+5, range:5ft, (1d6+3)slashing damage"
      },
      {
        name: "Berserker",
        CR: 2,
        HP: 67,
        AC: 13,
        speed: 30,
        str: 16,
        dex: 12,
        con: 17,
        int: 9,
        wis: 11,
        cha: 9,
        strSave: 3,
        dexSave: 1,
        conSave: 3,
        intSave: -1,
        wisSave: 0,
        chaSave: -1,
        actions: `Greataxe. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.`
      },
      {
        name: "Cult Fanatic",
        CR: 2,
        HP: 33,
        AC: 13,
        speed: 30,
        str: 11,
        dex: 14,
        con: 12,
        int: 10,
        wis: 13,
        cha: 14,
        strSave: 0,
        dexSave: 2,
        conSave: 1,
        intSave: 0,
        wisSave: 1,
        chaSave: 2,
        actions: `Spellcasting. The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:
        
        Cantrips (at will): light, sacred flame, thaumaturgy
        
        1st level (4 slots): command, inflict wounds, shield of faith
        
        2nd level (3 slots): hold person, spiritual weapon
        Multiattack. The fanatic makes two melee attacks.
        
        Dagger. Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.`
      },
      {
        name: "Druid",
        CR: 2,
        HP: 27,
        AC: 11,
        speed: 30,
        str: 10,
        dex: 12,
        con: 13,
        int: 12,
        wis: 15,
        cha: 11,
        strSave: 0,
        dexSave: 1,
        conSave: 1,
        intSave: 1,
        wisSave: 2,
        chaSave: 0,
        actions: `Spellcasting. The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:

        Cantrips (at will): druidcraft, produce flame, shillelagh
        
        1st level (4 slots): entangle, longstrider, speak with animals, thunderwave
        
        2nd level (3 slots): animal messenger, barkskin
        Quarterstaff. Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh.`
      },
      {
        name: "Knight",
        CR: 3,
        HP: 52,
        AC: 18,
        speed:30 ,
        str: 16,
        dex: 11,
        con: 14,
        int: 11,
        wis: 11,
        cha: 15,
        strSave: 3,
        dexSave: 0,
        conSave: 4,
        intSave: 0,
        wisSave: 2,
        chaSave: 2,
        actions: `Multiattack. The knight makes two melee attacks.

        Greatsword. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.
        
        Heavy Crossbow. Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.
        
        Leadership (Recharges after a Short or Long Rest). For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.`
      },
      {
        name: "Veteran",
        CR: 3,
        HP: 58,
        AC: 17,
        speed: 30,
        str: 16,
        dex: 13,
        con: 14,
        int: 10,
        wis: 11,
        cha: 10,
        strSave: 3,
        dexSave: 1,
        conSave: 2,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: `Multiattack. The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.

        Longsword. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.
        
        Shortsword. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.
        
        Heavy Crossbow. Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.`
      },
      {
        name: "Gladiator",
        CR: 5,
        HP: 112,
        AC: 16,
        speed: 30,
        str: 18,
        dex: 15,
        con: 16,
        int: 10,
        wis: 12,
        cha: 15,
        strSave: 7,
        dexSave: 5,
        conSave: 6,
        intSave: 0,
        wisSave: 1,
        chaSave: 2,
        actions: `Multiattack. The gladiator makes three melee attacks or two ranged attacks.

        Spear. Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.
        
        Shield Bash. Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.`
      },
      {
        name: "Assassin",
        CR: 8,
        HP: 78,
        AC: 15,
        speed: 30,
        str: 11,
        dex: 16,
        con: 14,
        int: 13,
        wis: 11,
        cha: 10,
        strSave: 0,
        dexSave: 6,
        conSave: 2,
        intSave: 4,
        wisSave: 0,
        chaSave: 0,
        actions: `Multiattack. The assassin makes two shortsword attacks.

        Shortsword. Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.
        
        Light Crossbow. Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.`
      },
    ]
    
    for (const singleCreatureData of creatureData) {
      const currentCreature = await Creature.query().findOne(singleCreatureData)
      if (!currentCreature) {
        await Creature.query().insert(singleCreatureData)
      }
    }
  }
}

export default CreatureSeeder


// {
//   name: "",
//   CR: ,
//   HP: ,
//   AC: ,
//   speed: ,
//   str: ,
//   dex: ,
//   con: ,
//   int: ,
//   wis: ,
//   cha: ,
//   strSave: ,
//   dexSave: ,
//   conSave: ,
//   intSave: ,
//   wisSave: ,
//   chaSave: ,
//   actions: ``
// },
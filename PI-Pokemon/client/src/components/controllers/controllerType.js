import bug from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/bug.png"
import dark from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/dark.png"
import dragon from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/dragon.png"
import electric from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/electric.png"
import fairy from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/fairy.png"
import fighting from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/fighting.png"
import fire from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/fire.png"
import flying from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/flying.png"
import ghost from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/ghost.png"
import grass from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/grass.png"
import ground from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/ground.png"
import ice from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/ice.png"
import normal from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/normal.png"
import poison from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/poison.png"
import psychic from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/psychic.png"
import rock from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/rock.png"
import shadow from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/shadow.png"
import steel from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/steel.png"
import unknown from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/unknown.png"
import water from "/home/cristian/Portfolio/PI-Pokemon/client/src/img/type/water.png"

let type = {
    bug,dark,dragon,electric,fairy,fighting,fire,flying,ghost,grass,
    ground,ice,normal,poison,psychic,rock,shadow,steel,unknown,water
}
export default function findtype (t){
    return type[t]
}
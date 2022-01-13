require("../../config/mongo");

const async = require("hbs/lib/async");
const mangaModel = require("../../models/mangaModel");

const mangas = [
  {
    name: "Tetsuo",
    volume: 1,
    cover: "/images/cover/couv1.jpg",
    resume: `"On December 6, 1982,[a] an apparent nuclear explosion destroys Tokyo and starts World War III. By 2019,[b] a new city called Neo-Tokyo has been built on artificial islands in Tokyo Bay. Although Neo-Tokyo is set to host the XXXII Olympic Games, the city is gripped by anti-government terrorism and gang violence. While exploring the ruins of old Tokyo, Tetsuo Shima, a member of the bōsōzoku gang led by Shōtarō Kaneda, is accidentally injured when his bike crashes after Takashi — a child Esper with wizened features — blocks his path. This incident awakens psychic powers in Tetsuo, attracting the attention of a secret government project directed by JSDF Colonel Shikishima. These increasing powers unhinge Tetsuo's mind, exacerbating his inferiority complex about Kaneda and leading him to assume leadership of the rival Clown Gang through violence.

        Meanwhile, Kaneda becomes involved with Kei, a member of a terrorist organization that stage attacks against the government. The terrorists, led by Ryu and opposition parliament leader Nezu, get wind of the Colonel's project and a mysterious figure connected with it known as "Akira". They hope to use this leaked information and try to restrict Kaneda's movements because of his involvement with their activities. However, when Tetsuo and the Clowns begin a violent citywide turf war, Kaneda instigates a counter-attack that unites all of Neo-Tokyo's biker gangs against Tetsuo. While the Clown Gang is easily defeated, Tetsuo's psionic powers make him virtually invincible. Tetsuo kills Yamagata, Kaneda's second-in-command, and astonishingly survives after being shot by Kaneda. The Colonel arrives with the powerful drugs needed to suppress Tetsuo's violent headaches, extending Tetsuo an offer to join the project."`,
  },
  {
    name: "Akira I",
    volume: 2,
    cover: "/images/cover/couv2.jpg",
    resume: `After their confrontation with the JSDF, Kaneda, Kei, and Tetsuo are taken into military custody and held in a highly secure skyscraper in Neo-Tokyo. Kei soon escapes after becoming possessed as a medium by another Esper, Kiyoko. Kei/Kiyoko briefly does battle with Tetsuo and frees Kaneda. After rapidly healing from his wounds, Tetsuo inquires about Akira, and forces Doctor Onishi, a project scientist, to take him to the other espers: Takashi, Kiyoko, and Masaru. There, a violent confrontation unfolds between Tetsuo, Kaneda, Kei, and the Espers. The Doctor decides to try to let Tetsuo harness Akira — the project's test subject that destroyed Tokyo — despite Tetsuo's disturbed personality. Upon learning that Akira is being stored in a cryogenic chamber beneath Neo-Tokyo's new Olympic Stadium, Tetsuo escapes the skyscraper with the intent of releasing Akira.

        The following day, Tetsuo enters the secret military base at the Olympic site, killing many soldiers. The Colonel comes to the base and tries to talk Tetsuo out of his plan; Kaneda and Kei enter the base through the sewers and witness the unfolding situation. Tetsuo breaks open the underground cryogenic chamber and frees Akira, who turns out to be an ordinary-looking little boy. The terror of seeing Akira causes one of the Colonel's men to declare a state of emergency that causes massive panic in Neo-Tokyo. The Colonel himself tries to use SOL, a laser satellite, to kill Tetsuo and Akira, but only succeeds in severing Tetsuo's arm.`,
  },
  {
    name: "Akira II",
    volume: 3,
    cover: "/images/cover/couv3.jpg",
    resume: `Tetsuo disappears in the subsequent explosion, and Kaneda and Kei come across Akira outside of the base. Vaguely aware of who he is, they take him back into Neo-Tokyo. Both the Colonel's soldiers and the followers of an Esper named Lady Miyako begin scouring Neo-Tokyo in search for him. Kaneda, Kei, and a third terrorist, Chiyoko, attempt to find refuge with Akira on Nezu's yacht. However, Nezu betrays them and kidnaps Akira for his use, attempting to have them killed. They survive the attempt and manage to snatch Akira from Nezu's mansion. The Colonel, desperate to find Akira and fed up with the government's tepid response to the crisis, mounts a coup d'état and puts the city under martial law. The Colonel's men join Lady Miyako's acolytes and Nezu's private army in chasing Kaneda, Kei, Chiyoko, and Akira through the city.

        The pursuit ends at a canal, with Kaneda's group surrounded by the Colonel's troops. As Akira is being taken into the Colonel's custody, Nezu attempts to shoot Akira rather than have him be put into government hands; he is immediately fired upon and killed by the Colonel's men. However, Nezu's shot misses Akira and hits Takashi in the head, killing him instantly. The trauma of Takashi's death causes Akira to trigger a second psychic explosion that destroys Neo-Tokyo. Kei, Ryu, Chiyoko, the Colonel, and the other two Espers survive the catastrophe; Kaneda, however, disappears as he is surrounded by the blast. After the city's destruction, Tetsuo reappears and meets Akira.`,
  },
  {
    name: "Kei I",
    volume: 4,
    cover: "/images/cover/couv4.jpg",
    resume: `Some time later, an American reconnaissance team led by Lieutenant George Yamada covertly arrives in the ruined Neo-Tokyo. Yamada learns that the city has been divided into two factions: the cult of Lady Miyako, which provides food and medicine for the destitute refugees, and the Great Tokyo Empire, a group of zealots led by Tetsuo with Akira as a figurehead, both worshiped as deities for performing "miracles". The Empire constantly harasses Lady Miyako's group and kills any intruders with Tetsuo's psychic shock troops. Kiyoko and Masaru become targets for the Empire's fanatical soldiers: Kei, Chiyoko, the Colonel, and Kai, a former member of Kaneda's gang, ally themselves with Lady Miyako to protect them.

        Yamada eventually becomes affiliated with Ryu, and updates him on how the world has reacted to the events in Neo-Tokyo; they later learn that an American naval fleet lingers nearby. Tetsuo becomes heavily dependent on government-issued pills to quell his headaches. Seeking answers, he visits Lady Miyako at her temple and is given a comprehensive history of the government project that unleashed Akira. Miyako advises Tetsuo to quit the pills to become more powerful; Tetsuo begins a withdrawal. Meanwhile, Tetsuo's aide, the Captain, stages an unsuccessful Empire assault on Miyako's temple. After the Colonel uses SOL to attack the Empire's army, a mysterious event opens a rift in the sky dumping massive debris from Akira's second explosion, as well as Kaneda.`,
  },
  {
    name: "Kei II",
    volume: 5,
    cover: "/images/cover/couv5.jpg",
    resume: `Kaneda is reunited with Kei and joins Kai and Joker, the former Clown leader, in planning an assault on the Great Tokyo Empire. Meanwhile, an international team of scientists meets up on an American aircraft carrier to study the recent psychic events in Neo-Tokyo, forming Project Juvenile A. Ryu has a falling out with Yamada after learning that he plans to use biological weapons to assassinate Tetsuo and Akira; Yamada later meets up with his arriving commando team. Akira and Tetsuo hold a rally at the Olympic Stadium to demonstrate their powers to the Empire, which culminates with Tetsuo tearing a massive hole in the Moon's surface and encircling it with a ring of the debris.

        Following the rally, Tetsuo's power begins to contort his physical body, causing it to absorb surrounding objects; he later learns that his abuse of his powers has caused them to expand beyond the confines of his body, giving him the ability to transmute inert matter into flesh and integrate it into his physical form. Tetsuo makes a series of visits on board the aircraft carrier to attack the scientists and do battle with American fighter jets. Eventually, Tetsuo takes over the ship and launches a nuclear weapon over the ocean. Kei—accepting the role of a medium controlled by Lady Miyako and the Espers—arrives and battles Tetsuo. Meanwhile, Kaneda, Kai, Joker, and their small army of bikers arrive at the Olympic Stadium to begin their all-out assault on the Great Tokyo Empire.`,
  },
  {
    name: "Kaneda",
    volume: 6,
    cover: "/images/cover/couv6.jpg",
    resume: `As Kaneda and the bikers launch their assault on the stadium, Tetsuo returns from his battle with Kei. As his powers continue to grow, Tetsuo's body begins involuntarily morphing, and his cybernetic arm is destroyed as his original arm regrows. He then faces Yamada's team, but absorbs their biological attacks and temporarily regains control of his powers. Tetsuo kills Yamada and the commandos; he also eludes the Colonel's attempts to kill him by guiding SOL with a laser designator. Kaneda confronts Tetsuo, and the two begin to fight; they are joined by Kei. However, the brawl is interrupted when the Americans try to carpet bomb Neo-Tokyo and destroy the city outright with their laser satellite, FLOYD. Tetsuo flies into space and brings down FLOYD, causing it to crash down upon the aircraft carrier, killing the fleet admiral and one of the scientists.

        After the battle, Tetsuo tries to resurrect Kaori, a girl he loved who was killed in the battle. He succeeds to a small degree but is unable to maintain focus. He retreats to Akira's cryogenic chamber beneath the stadium, carrying her body. Kaneda and his friends appear to fight Tetsuo once more, but his powers transform him into a monstrous, amoeba-like mass resembling a fetus, absorbing everything near him. Tetsuo pulls the cryogenic chamber above-ground and drops it onto Lady Miyako's temple. Lady Miyako dies while defying Tetsuo, after guiding Kei into space to fire upon him with SOL. Kei's attack awakens Tetsuo's full powers, triggering a psychic reaction similar to Akira's. With the help of Kiyoko, Masaru, and the spirit of Takashi, Akira can cancel out Tetsuo's explosion with one of his own. They are also able to free Kaneda, who was trapped in Tetsuo's mass, and he witnesses the truth about the Espers' power as they, alongside Akira and Tetsuo, ascend to a higher plane of existence.
        
        The United Nations sends forces to help the surviving parties of Neo-Tokyo. Kaneda and his friends confront them, declaring the city's sovereignty as the Great Tokyo Empire and warning them that Akira still lives in their hearts. Kaneda and Kei meet up with the Colonel and part ways as friends. As Kaneda and Kei ride through Neo-Tokyo with their followers, they are joined by ghostly visions of Tetsuo and Yamagata. They also see the city shedding its ruined façade, returning to its former splendor.`,
  },
];

(async function createManga() {
  try {
    const { deletedCount } = await mangaModel.deleteMany();
    console.log(`success : ${deletedCount} manga deleted from database !`);
    const res = await mangaModel.insertMany(mangas);
    console.log(`success : ${res.length} manga in database`);
    process.exit;
  } catch (error) {
    console.log("ERROR !!");
    console.error(error);
  }
})();

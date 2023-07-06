const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
const backgroundURLs=[
  {background:"./img/background1.jpg"},
  {background:"./img/background2.jpg"},
  {background:"./img/background3.jpg"},
  {background:"./img/background4.jpg"},
  {background:"./img/background5.jpg"},
]
backgroundURLs[0].value="bg1";
backgroundURLs[1].value="bg2";
backgroundURLs[2].value="bg3";
backgroundURLs[3].value="bg4";
backgroundURLs[4].value="bg5";

const backgroundNumber=backgroundURLs.findIndex(background => background.value === selectedMapValues[0]);
const background = new Sprite({ position: { x: 0, y: 0 }, imagesrc: backgroundURLs[backgroundNumber].background });

const playeravatarURLs = [
    {
      idle: "./img/Avatar1/Idle.png",
      run: "./img/Avatar1/Run.png",
      jump: "./img/Avatar1/Jump.png",
      fall: "./img/Avatar1/Fall.png",
      attack1: "./img/Avatar1/Attack1.png",
      takehit: "./img/Avatar1/Take hit.png",
      death: "./img/Avatar1/Death.png",
    },
    {
        idle: "./img/Avatar2/Idle.png",
        run: "./img/Avatar2/Run.png",
        jump: "./img/Avatar2/Jump.png",
        fall: "./img/Avatar2/Fall.png",
        attack1: "./img/Avatar2/Attack1.png",
        takehit: "./img/Avatar2/Take hit.png",
        death: "./img/Avatar2/Death.png",
        
    },
    {
        idle: "./img/Avatar3/Idle.png",
        run: "./img/Avatar3/Run.png",
        jump: "./img/Avatar3/Jump.png",
        fall: "./img/Avatar3/Fall.png",
        attack1: "./img/Avatar3/Attack1.png",
        takehit: "./img/Avatar3/Take hit.png",
        death: "./img/Avatar3/Death.png",
        
    },
    {
        idle: "./img/Avatar4/Idle.png",
        run: "./img/Avatar4/Run.png",
        jump: "./img/Avatar4/Jump.png",
        fall: "./img/Avatar4/Fall.png",
        attack1: "./img/Avatar4/Attack1.png",
        takehit: "./img/Avatar4/Take hit.png",
        death: "./img/Avatar4/Death.png",
        
    },
    {
        idle: "./img/Avatar5/Idle.png",
        run: "./img/Avatar5/Run.png",
        jump: "./img/Avatar5/Jump.png",
        fall: "./img/Avatar5/Fall.png",
        attack1: "./img/Avatar5/Attack1.png",
        takehit: "./img/Avatar5/Take hit.png",
        death: "./img/Avatar5/Death.png",
        
    },
    {
        idle: "./img/Avatar6/Idle.png",
        run: "./img/Avatar6/Run.png",
        jump: "./img/Avatar6/Jump.png",
        fall: "./img/Avatar6/Fall.png",
        attack1: "./img/Avatar6/Attack1.png",
        takehit: "./img/Avatar6/Take hit.png",
        death: "./img/Avatar6/Death.png",
        
    },
    {
        idle: "./img/Avatar7/Idle.png",
        run: "./img/Avatar7/Run.png",
        jump: "./img/Avatar7/Jump.png",
        fall: "./img/Avatar7/Fall.png",
        attack1: "./img/Avatar7/Attack1.png",
        takehit: "./img/Avatar7/Take hit.png",
        death: "./img/Avatar7/Death.png",
        
    },
    {
        idle: "./img/Avatar8/Idle.png",
        run: "./img/Avatar8/Run.png",
        jump: "./img/Avatar8/Jump.png",
        fall: "./img/Avatar8/Fall.png",
        attack1: "./img/Avatar8/Attack1.png",
        takehit: "./img/Avatar8/Take hit.png",
        death: "./img/Avatar8/Death.png",
        
    },
 
  ];
  playeravatarURLs[0].value = 'Valeur1';
  playeravatarURLs[1].value = 'Valeur2';
  playeravatarURLs[2].value = 'Valeur3';
  playeravatarURLs[3].value = 'Valeur4';
  playeravatarURLs[4].value = 'Valeur5';
  playeravatarURLs[5].value = 'Valeur6';
  playeravatarURLs[6].value = 'Valeur7';
  playeravatarURLs[7].value = 'Valeur8';  



  const enemyavatarURLs = [
    {
      idle: "./img/Avatar1/Idle.png",
      run: "./img/Avatar1/Run.png",
      jump: "./img/Avatar1/Jump.png",
      fall: "./img/Avatar1/Fall.png",
      attack1: "./img/Avatar1/Attack1.png",
      takehit: "./img/Avatar1/Take hit.png",
      death: "./img/Avatar1/Death.png",
    },
    {
        idle: "./img/Avatar2/Idle.png",
        run: "./img/Avatar2/Run.png",
        jump: "./img/Avatar2/Jump.png",
        fall: "./img/Avatar2/Fall.png",
        attack1: "./img/Avatar2/Attack1.png",
        takehit: "./img/Avatar2/Take hit.png",
        death: "./img/Avatar2/Death.png",
        
    },
    {
        idle: "./img/Avatar3/Idle.png",
        run: "./img/Avatar3/Run.png",
        jump: "./img/Avatar3/Jump.png",
        fall: "./img/Avatar3/Fall.png",
        attack1: "./img/Avatar3/Attack1.png",
        takehit: "./img/Avatar3/Take hit.png",
        death: "./img/Avatar3/Death.png",
        
    },
    {
        idle: "./img/Avatar4/Idle.png",
        run: "./img/Avatar4/Run.png",
        jump: "./img/Avatar4/Jump.png",
        fall: "./img/Avatar4/Fall.png",
        attack1: "./img/Avatar4/Attack1.png",
        takehit: "./img/Avatar4/Take hit.png",
        death: "./img/Avatar4/Death.png",
        
    },
    {
        idle: "./img/Avatar5/Idle.png",
        run: "./img/Avatar5/Run.png",
        jump: "./img/Avatar5/Jump.png",
        fall: "./img/Avatar5/Fall.png",
        attack1: "./img/Avatar5/Attack1.png",
        takehit: "./img/Avatar5/Take hit.png",
        death: "./img/Avatar5/Death.png",
        
    },
    {
        idle: "./img/Avatar6/Idle.png",
        run: "./img/Avatar6/Run.png",
        jump: "./img/Avatar6/Jump.png",
        fall: "./img/Avatar6/Fall.png",
        attack1: "./img/Avatar6/Attack1.png",
        takehit: "./img/Avatar6/Take hit.png",
        death: "./img/Avatar6/Death.png",
        
    },
    {
        idle: "./img/Avatar7/Idle.png",
        run: "./img/Avatar7/Run.png",
        jump: "./img/Avatar7/Jump.png",
        fall: "./img/Avatar7/Fall.png",
        attack1: "./img/Avatar7/Attack1.png",
        takehit: "./img/Avatar7/Take hit.png",
        death: "./img/Avatar7/Death.png",
        
    },
    {
        idle: "./img/Avatar8/Idle.png",
        run: "./img/Avatar8/Run.png",
        jump: "./img/Avatar8/Jump.png",
        fall: "./img/Avatar8/Fall.png",
        attack1: "./img/Avatar8/Attack1.png",
        takehit: "./img/Avatar8/Take hit.png",
        death: "./img/Avatar8/Death.png",
        
    },

  ];
  enemyavatarURLs[0].value = 'Valeur1';
  enemyavatarURLs[1].value = 'Valeur2';
  enemyavatarURLs[2].value = 'Valeur3';
  enemyavatarURLs[3].value = 'Valeur4';
  enemyavatarURLs[4].value = 'Valeur5';
  enemyavatarURLs[5].value = 'Valeur6';
  enemyavatarURLs[6].value = 'Valeur7';
  enemyavatarURLs[7].value = 'Valeur8';

  const playerAvatarNumber = playeravatarURLs.findIndex(avatar => avatar.value === selectedAvatarValues[0]);
  const enemyAvatarNumber = enemyavatarURLs.findIndex(avatar => avatar.value === selectedAvatarValues[1]);

  
  const player = new Fighter({
    position: { x: 200, y: 0 },
    velocity: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    imagesrc: playeravatarURLs[playerAvatarNumber].idle,
    framesMax: 8,
    scale: 2.5,
    offset: { x: 215, y: 125 },
    sprites: {
        idle: { imagesrc: playeravatarURLs[playerAvatarNumber].idle, framesMax: 4 },
        run: { imagesrc: playeravatarURLs[playerAvatarNumber].run, framesMax: 8 },
        jump: { imagesrc: playeravatarURLs[playerAvatarNumber].jump, framesMax: 2 },
        fall: { imagesrc: playeravatarURLs[playerAvatarNumber].fall, framesMax: 2 },
        attack1: { imagesrc: playeravatarURLs[playerAvatarNumber].attack1, framesMax: 4 },
        takehit: { imagesrc: playeravatarURLs[playerAvatarNumber].takehit, framesMax: 4 },
        death: { imagesrc: playeravatarURLs[playerAvatarNumber].death, framesMax: 4 },
      },
    attackBox: { offset: { x: 80, y: 50 }, width: 150, height: 50 },
  });
  
  const enemy = new Fighter({
    position: { x: 800, y: 100 },
    velocity: { x: 0, y: 0 },
    color: 'blue',
    offset: { x: 0, y: 0 },
    imagesrc: enemyavatarURLs[enemyAvatarNumber].idle,
    framesMax: 8,
    scale: 2.5,
    offset: { x: -300, y: 127 },
    sprites: {
        idle: { imagesrc: enemyavatarURLs[enemyAvatarNumber].idle, framesMax: 4 },
        run: { imagesrc: enemyavatarURLs[enemyAvatarNumber].run, framesMax: 8 },
        jump: { imagesrc: enemyavatarURLs[enemyAvatarNumber].jump, framesMax: 2 },
        fall: { imagesrc: enemyavatarURLs[enemyAvatarNumber].fall, framesMax: 2 },
        attack1: { imagesrc: enemyavatarURLs[enemyAvatarNumber].attack1, framesMax: 4 },
        takehit: { imagesrc: enemyavatarURLs[enemyAvatarNumber].takehit, framesMax: 4 },
        death: { imagesrc: enemyavatarURLs[enemyAvatarNumber].death, framesMax: 4 },
      },
    attackBox: { offset: { x: -120, y: 50 }, width: 150, height: 50 },
  });
  
const keys = {
  q: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
};

decreaseTimer();

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  c.fillStyle = 'rgba(255,255,255,0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  enemy.flipX = true;
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  

  // Mouvement du joueur
  if (keys.q.pressed && player.lastkey == 'q') {
    player.velocity.x = -5;
    player.switchsprite('run');
  } else if (keys.d.pressed && player.lastkey == 'd') {
    player.velocity.x = 5;
    player.switchsprite('run');
  } else {
    player.switchsprite('idle');
  }

  // Saut du joueur
  if (player.velocity.y < 0) {
    player.switchsprite('jump');
  } else if (player.velocity.y > 0) {
    player.switchsprite('fall');
  }

  // Mouvement de l'ennemi
  if (keys.ArrowLeft.pressed && enemy.lastkey == 'ArrowLeft') {
    enemy.velocity.x = -5;
    enemy.switchsprite('run');
  } else if (keys.ArrowRight.pressed && enemy.lastkey == 'ArrowRight') {
    enemy.velocity.x = 5;
    enemy.switchsprite('run');
  } else {
    enemy.switchsprite('idle');
  }

  if (enemy.velocity.y < 0) {
    enemy.switchsprite('jump');
  } else if (enemy.velocity.y > 0) {
    enemy.switchsprite('fall');
  }

  // Détection des collisions
  if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    player.isAttacking && player.frameCurrent === 2) {
    enemy.takehit();
    player.isAttacking = false;
    gsap.to('#enemyhealth', {
      width: enemy.health + "%"
    });
  }
  // Le joueur rate
  if (player.isAttacking && player.frameCurrent === 2) {
    player.isAttacking = false;
  }

  if (rectangularCollision({ rectangle1: enemy, rectangle2: player }) &&
    enemy.isAttacking && enemy.frameCurrent === 2) {
    player.takehit();
    enemy.isAttacking = false;
    gsap.to('#playerhealth', {
      width: player.health + "%"
    });
  }
  // L'ennemi rate
  if (enemy.isAttacking && enemy.frameCurrent === 2) {
    enemy.isAttacking = false;
  }

  // Fin du jeu
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerID });
  }
}

animate();

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        player.lastkey = 'd';
        break;
      case 'q':
        keys.q.pressed = true;
        player.lastkey = 'q';
        break;
      case 'z':
        if (player.velocity.y === 0) {
          player.velocity.y = -20;
        }
        break;
      case 's':
        player.attack();
        break;
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        enemy.lastkey = 'ArrowRight';
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        enemy.lastkey = 'ArrowLeft';
        break;
      case 'ArrowUp':
        if (enemy.velocity.y === 0) {
          enemy.velocity.y = -20;
        }
        break;
      case 'ArrowDown':
        enemy.attack();
        break;
    }
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'q':
      keys.q.pressed = false;
      break;
    case 'z':
      keys.z.pressed = false;
      break;
  }
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;
    case 'z':
      keys.z.pressed = false;
      break;
  }
});


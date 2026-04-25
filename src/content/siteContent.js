/**
 * Contenu du site — Evariste & Thérèse (Couple Kalengayi)
 * Remplacez `placeholder.svg` par vos photos dans `public/img/`.
 */
export const siteContent = {
  meta: {
    title: 'Evariste & Thérèse — Couple Kalengayi',
    htmlLang: 'fr',
  },

  couple: {
    displayName: 'Evariste & Thérèse',
    displayNameAlt: 'Couple Kalengayi',
    navBrandMobile: { line1: 'Evariste', joiner: 'et', line2: 'Thérèse' },
    navBrandDesktop: { before: 'Evariste', joiner: 'et', after: 'Thérèse' },
    heroTagline: 'Couple Kalengayi',
    heroImpact:
      'Une histoire construite avec maturité, vision et respect des traditions — depuis la station jusqu’à ce jour.',
  },

  splash: {
    logoCandidates: ['logo.png', 'img/logo.png', 'img/logo.jpg'],
    minVisibleMs: 3000,
  },

  nav: [
    { hash: '#home', label: 'Accueil' },
    { hash: '#about', label: 'À propos' },
    { hash: '#story', label: 'Histoire' },
    { hash: '#gallery', label: 'Galerie' },
    { hash: '#family', label: 'Famille' },
    { hash: '#event', label: 'Événement' },
    { hash: '#rsvp', label: 'Voeux' },
    { hash: '#contact', label: 'Contact' },
  ],

  hero: {
    slides: [
      { image: 'placeholder.svg', alt: 'Evariste & Thérèse' },
      { image: 'placeholder.svg', alt: 'Couple Kalengayi' },
    ],
  },

  about: {
    sectionKicker: 'À propos',
    sectionTitle: 'Couple Kalengayi',
    groom: {
      title: 'Le Marié',
      html: `Evariste Kalengayi, affectueusement surnommé <strong>«&nbsp;The King&nbsp;»</strong>, est un homme de vision et de détermination. Responsable administratif au sein de Etisac SARL et entrepreneur engagé, il se distingue par son sens de l’organisation, sa rigueur et son professionnalisme.<br><br>
Doté d’un naturel chaleureux et d’un humour subtil, il apprécie la quiétude de la musique chrétienne douce. Passionné par la technologie, il consacre une part de son temps à la recherche et à l’apprentissage, ne laissant jamais place à l’improvisation. Toujours disponible et serviable, il s’investit pleinement dans tout ce qu’il entreprend.`,
      signature: 'Evariste Kalengayi',
      image: 'placeholder.svg',
    },
    bride: {
      title: 'La Mariée',
      html: `À ses côtés, <strong>Thérèse Ndaya</strong>, dite <strong class="text-primary">NdaThe</strong>, incarne la grâce et la créativité. Esthéticienne, couturière et entrepreneure, elle allie savoir-faire, élégance et sens du détail. Sa douceur et son esprit d’initiative apportent équilibre et harmonie dans leur relation.`,
      signature: 'Thérèse Ndaya',
      image: 'placeholder.svg',
    },
    videoFile: null,
  },

  story: {
    sectionKicker: 'Histoire',
    sectionTitle: 'Leur rencontre & leur parcours',
    items: [
      {
        image: 'placeholder.svg',
        imageAlt: 'Première rencontre',
        title: 'Leur rencontre',
        date: 'Dimanche 15 octobre 2023',
        html: `Leur histoire débute le dimanche 15 octobre 2023, à l’issue d’un moment de prière à la station.<br><br>
Cette première rencontre, simple mais profondément marquante, fut célébrée par une sortie conviviale en compagnie de leurs proches : <strong>Elkas</strong>, <strong>Papa Rudi</strong> et <strong>Marthine</strong>.<br><br>
Un instant précieux, immortalisé comme le point de départ d’une belle aventure.`,
        imageSide: 'left',
      },
      {
        image: 'placeholder.svg',
        imageAlt: 'Parcours du couple',
        title: 'Leur parcours',
        date: '15 février 2024',
        html: `Au fil du temps, leur relation s’est construite avec maturité et vision, autour de projets d’avenir et d’une organisation réfléchie de leur vie commune.<br><br>
Quatre mois plus tard, soit le <strong>15 février 2024</strong>, Evariste franchit une étape décisive en se présentant officiellement à la famille de Thérèse, marquant ainsi un engagement sérieux et respectueux des traditions.`,
        imageSide: 'right',
      },
    ],
  },

  galleryFilenames: [],

  gallery: {
    sectionKicker: 'Galerie',
    sectionTitle: 'Notre Galerie',
    backgroundImage: 'placeholder.svg',
    subtitle: 'Revivez chaque instant à travers nos souvenirs',
    driveUrl: null,
    driveCtaLabel: 'Photos & vidéos',
  },

  events: {
    sectionKicker: 'Événement',
    sectionTitle: 'Dates importantes',
    intro:
      'Les étapes marquantes de notre union — de la présentation familiale aux fiançailles.',
    items: [
      {
        image: 'placeholder.svg',
        title: 'Présentation familiale',
        dateLabel: '15 février 2024',
        html: `Rencontre officielle des familles et engagement respectueux des traditions.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Dot / coutume',
        dateLabel: '29 juin 2024',
        html: `Célébration des coutumes et de la dot.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Coutume (suite)',
        dateLabel: '5 juillet 2024',
        html: `Poursuite des cérémonies coutumières.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Mariage civil',
        dateLabel: '25 septembre 2024 — Maison communale de Gombe',
        html: `Union civile à la Maison communale de Gombe.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Mariage religieux',
        dateLabel: 'Église Shekinah Tabernacle',
        html: `Célébration religieuse à l’Église Shekinah Tabernacle.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Demande en mariage',
        dateLabel: '20 janvier 2025',
        html: `Une demande et une promesse pour la vie à deux.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Fiançailles',
        dateLabel: '3 mars 2025',
        html: `Engagement officialisé devant famille et proches.`,
        videoUrl: null,
      },
    ],
  },

  family: {
    sectionKicker: 'Famille',
    sectionTitle: 'Résidence, témoins & proches',
    parentsGroom: {
      label: 'Résidence / Famille',
      names: 'N°08, Quartier Debonhomme, 8ᵉ rue, Commune de Matete',
    },
    parentsBride: null,
    friendsKicker: '',
    friendsTitle: '',
    witnesses: {
      sectionTitle: 'Témoins',
      image: 'placeholder.svg',
      title: '',
      subtitle: '',
    },
    witnessesList: [
      {
        image: 'placeholder.svg',
        title: 'Mpoyi Mbala Cimon & Epote Melanie',
        subtitle: 'Témoins',
      },
      {
        image: 'placeholder.svg',
        title: 'Luc Lukumwena & Charlotte Ilunga',
        subtitle: 'Témoins',
      },
      {
        image: 'placeholder.svg',
        title: 'Mr Leopold Gerengbo & Mme Ruth Mwamba',
        subtitle: 'Témoins',
      },
    ],
    important: null,
    closeKin: {
      sectionTitle: 'Enfants & proches',
      lines: [
        'Prisca, Agapao, Acacia, Ruth',
        'Enoch 7ᵉ, Matthieu Kazadi, Georges, Joël Kam’s',
      ],
    },
  },

  rsvp: {
    sectionKicker: 'VOEUX',
    sectionTitle: 'Rejoignez notre célébration',
    intro:
      'Votre présence, vos prières et vos messages comptent énormément pour nous. Nous serions honorés de recevoir vos vœux et bénédictions pour cette nouvelle vie.',
    contactIntro: 'Contact — téléphone ou e-mail :',
    telHref: 'tel:+243813348880',
    telLabel: '081 33 48 880',
    whatsappHref: 'https://api.whatsapp.com/send?phone=243813348880',
    whatsappAriaLabel: 'Nous écrire sur WhatsApp',
    emailHref: 'mailto:evakalengayi.ek@gmail.com',
    emailLabel: 'evakalengayi.ek@gmail.com',
  },

  footer: {
    title: '',
    creditLabel: 'Conçu par',
    creditName: 'One Memoria',
    creditUrl: 'https://www.onememoria.com',
    quote: 'De la prière à la promesse, un seul chemin à deux.',
    quotePremium:
      'Une union bâtie avec vision, tradition et cœur — Couple Kalengayi.',
    whatsappHref: 'https://api.whatsapp.com/send?phone=243991683269',
    whatsappAriaLabel: 'Contacter One Memoria sur WhatsApp',
    copyrightCoupleHref: 'mailto:evakalengayi.ek@gmail.com',
    copyrightLabel: 'Evariste & Thérèse',
  },

  music: {
    enabled: true,
    src: 'audio/htmstyle.mpeg',
    titleHover: 'Musique de fond — cliquer pour lire ou mettre en pause',
  },
}

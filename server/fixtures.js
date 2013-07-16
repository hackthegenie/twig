if (Twigs.find().count() === 0) {
  Twigs.insert({
  	
    title: 'Opening Moves',
    twig1Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig1Text: "It is your go and there are some empty corners",
    twig1Title: "Empty Corners",
    twig1Id: "id_1",
    twig2Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig2Text: "The 4-3 point needs 2 stones to make territory, if the corners are full, but there is a coner with just one 4-3 stone - play here.",
    twig2Title: "One stone at the 4-3",
    twig2Id: "id_2",
    twig3Image: "http://senseis.xmp.net/diagrams/36/0508e7fbc5ebc5768172d3c560cd0c2b.png",
    twig3Text: "If the corners are full and there are 2 stones in corners with 4-3 stones - play to the Edges.",
    twig3Id: "id_3",
    twig3Title: "All corners are full"
  });

  Twigs.insert({
    title: 'Choose which corner to pay',
    twig1Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig1Text: "It is your go and there are some empty corners",
    twig1Title: "Influence",
    twig1Id: "id_1",
    twig2Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig2Text: "The 4-3 point needs 2 stones to make territory, if the corners are full, but there is a coner with just one 4-3 stone - play here.",
    twig2Title: "Balance",
    twig2Id: "id_2",
    twig3Image: "http://senseis.xmp.net/diagrams/36/0508e7fbc5ebc5768172d3c560cd0c2b.png",
    twig3Text: "If the corners are full and there are 2 stones in corners with 4-3 stones - play to the Edges.",
    twig3Id: "id_3",
    twig3Title: "Territory"
  });

  Twigs.insert({
       title: 'Enclose or attack',
    twig1Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig1Text: "It is your go and there are some empty corners",
    twig1Title: "Attack an enemy on 3-4",
    twig1Id: "id_1",
    twig2Image: "http://senseis.xmp.net/diagrams/20/82468bcdc123eceae81662e2efcc14c7.png",
    twig2Text: "The 4-3 point needs 2 stones to make territory, if the corners are full, but there is a coner with just one 4-3 stone - play here.",
    twig2Title: "Defend your territory",
    twig2Id: "id_2"
  });
}

if (Resources.find().count() === 0) {
  Resources.insert({
    title: 'Here is how to wakeboard',
    content:'Wakeboarding is a cool sport that you can do on a wakebaord, it is lots of fun'
  });
Resources.insert({
    title: 'Here is how to shortboard',
    content:'Shortboarding is a cool sport that you can do on a wakebaord, it is lots of fun'
  });
  Resources.insert({
    title: 'Here is how to Longboard',
    content:'Longboarding is a cool sport that you can do on a wakebaord, it is lots of fun'
  });
}



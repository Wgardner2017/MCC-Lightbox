// model
const model = {
    declaration() {
      this.imgArrayShown = [];
    },
  
    lightBoxVariable() {
      this.currentImgSrc = '';
      this.currentImgSrcTh = '';
      this.currentImgAlt = '';
      this.caption = '';
    },
  
    imgObj: [
      (img01 = {
        imgSrcTh: 'photos/thumbnails/01.jpg',
        imgSrc: 'photos/01.jpg',
        imgAlt: 'Countryside straw fields',
        imgCaption:
          'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
        imgTitle: 'Hay Bales'
      }),
      (img02 = {
        imgSrcTh: 'photos/thumbnails/02.jpg',
        imgSrc: 'photos/02.jpg',
        imgAlt: 'lake below the snow mountain',
        imgCaption:
          'The lake was so calm today. We had a great view of the snow on the mountains from here.',
        imgTitle: 'Lake'
      }),
      (img03 = {
        imgSrcTh: 'photos/thumbnails/03.jpg',
        imgSrc: 'photos/03.jpg',
        imgAlt: 'revealing the canyon',
        imgCaption:
          'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
        imgTitle: 'Canyon'
      }),
      (img04 = {
        imgSrcTh: 'photos/thumbnails/04.jpg',
        imgSrc: 'photos/04.jpg',
        imgAlt: 'beauty of iceberg',
        imgCaption:
          'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
        imgTitle: 'Iceberg'
      }),
      (img05 = {
        imgSrcTh: 'photos/thumbnails/05.jpg',
        imgSrc: 'photos/05.jpg',
        imgAlt: 'red cliffs and desert',
        imgCaption:
          'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
        imgTitle: 'Desert'
      }),
      (img06 = {
        imgSrcTh: 'photos/thumbnails/06.jpg',
        imgSrc: 'photos/06.jpg',
        imgAlt: 'trees of fall',
        imgCaption:
          'Fall is coming, I love when the leaves on the trees start to change color.',
        imgTitle: 'Fall'
      }),
      (img07 = {
        imgSrcTh: 'photos/thumbnails/07.jpg',
        imgSrc: 'photos/07.jpg',
        imgAlt: 'green trees plantation',
        imgCaption:
          'I drove past this plantation yesterday, everything is so green!',
        imgTitle: 'Plantation'
      }),
      (img08 = {
        imgSrcTh: 'photos/thumbnails/08.jpg',
        imgSrc: 'photos/08.jpg',
        imgAlt: 'sandy dunes of oregon coast',
        imgCaption:
          'My summer vacation to the Oregon Coast. I love the sandy dunes!',
        imgTitle: 'Dunes'
      }),
      (img09 = {
        imgSrcTh: 'photos/thumbnails/09.jpg',
        imgSrc: 'photos/09.jpg',
        mgAlt: 'countryside lane',
        imgCaption: 'We enjoyed a quiet stroll down this countryside lane.',
        imgTitle: 'Countryside Lane'
      }),
      (img10 = {
        imgSrcTh: 'photos/thumbnails/10.jpg',
        imgSrc: 'photos/10.jpg',
        imgAlt: 'beautiful sunset and the river',
        imgCaption:
          'Sunset at the coast! The sky turned a lovely shade of orange.',
        imgTitle: 'Sunset'
      }),
      (img11 = {
        imgSrcTh: 'photos/thumbnails/11.jpg',
        imgSrc: 'photos/11.jpg',
        imgAlt: 'beautiful landscape from the cave',
        imgCaption:
          'I did a tour of a cave today and the view of the landscape below was breathtaking.',
        imgTitle: 'Cave'
      }),
      (img12 = {
        imgSrcTh: 'photos/thumbnails/12.jpg',
        imgSrc: 'photos/12.jpg',
        imgAlt: 'beautiful snow mountains',
        imgCaption:
          'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
        imgTitle: 'Bluebells'
      })
    ]
  };
//search and filter photos


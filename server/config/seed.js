/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var BibleBookCh = require('../api/bible_book_ch/bible_book_ch.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

BibleBookCh.create({
	order_no : 1,
	content : "<p><sup><b>&nbsp;1&nbsp;</b></sup>In the beginning God created the heavens and the earth.<sup><a href='#'>&nbsp;+</a></sup></p><p><sup><b>&nbsp;2&nbsp;</b></sup>Now the earth was formless and desolate,<sup><a href='#'>&nbsp;*</a></sup> and there was darkness upon the surface of the watery deep,<sup><a href='#'>&nbsp;*</a></sup><sup><a href='#'>&nbsp;+</a></sup> and God’s active force<sup><a href='#'>&nbsp;*</a></sup><sup><a href='#'>&nbsp;+</a></sup> was moving about over the surface of the waters.<sup><a href='#'>&nbsp;+</a></sup></p><p><sup><b>&nbsp;3&nbsp;</b></sup>And God said: “Let there be light.” Then there was light.<sup><a href='#'>&nbsp;+</a></sup></p><p><sup><b>&nbsp;4&nbsp;</b></sup>After that God saw that the light was good, and God began to divide the light from the darkness. <sup><b>&nbsp;5&nbsp;</b></sup>God called the light Day, but the darkness he called Night.<sup><a href='#'>&nbsp;+</a></sup> And there was evening and there was morning, a first day.</p><p><sup><b>&nbsp;6&nbsp;</b></sup>Then God said: “Let there be an expanse<sup><a href='#'>&nbsp;+</a></sup> between the waters, and let there be a division between the waters and the waters.”<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;7&nbsp;</b></sup>Then God went on to make the expanse and divided the waters beneath the expanse from the waters above the expanse.<sup><a href='#'>&nbsp;+</a></sup> And it was so. <sup><b>&nbsp;8&nbsp;</b></sup>God called the expanse Heaven.<sup><a href='#'>&nbsp;*</a></sup> And there was evening and there was morning, a second day.</p><p><sup><b>&nbsp;9&nbsp;</b></sup>Then God said: “Let the waters under the heavens be collected together into one place, and let the dry land appear.”<sup><a href='#'>&nbsp;+</a></sup> And it was so. <sup><b>&nbsp;10&nbsp;</b></sup>God called the dry land Earth,<sup><a href='#'>&nbsp;+</a></sup> but the collecting of the waters, he called Seas.<sup><a href='#'>&nbsp;+</a></sup> And God saw that it was good.<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;11&nbsp;</b></sup>Then God said: “Let the earth cause grass to sprout, seed-bearing plants and fruit trees according to their kinds, yielding fruit along with seed on the earth.” And it was so. <sup><b>&nbsp;12&nbsp;</b></sup>And the earth began to produce grass, seed-bearing plants<sup><a href='#'>&nbsp;+</a></sup> and trees yielding fruit along with seed, according to their kinds. Then God saw that it was good. <sup><b>&nbsp;13&nbsp;</b></sup>And there was evening and there was morning, a third day.</p><p><sup><b>&nbsp;14&nbsp;</b></sup>Then God said: “Let there be luminaries<sup><a href='#'>&nbsp;*</a></sup><sup><a href='#'>&nbsp;+</a></sup> in the expanse of the heavens to make a division between the day and the night,<sup><a href='#'>&nbsp;+</a></sup> and they will serve as signs for seasons and for days and years.<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;15&nbsp;</b></sup>They will serve as luminaries in the expanse of the heavens to shine upon the earth.” And it was so. <sup><b>&nbsp;16&nbsp;</b></sup>And God went on to make the two great luminaries, the greater luminary for dominating the day<sup><a href='#'>&nbsp;+</a></sup> and the lesser luminary for dominating the night, and also the stars.<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;17&nbsp;</b></sup>Thus God put them in the expanse of the heavens to shine upon the earth <sup><b>&nbsp;18&nbsp;</b></sup>and to dominate by day and by night and to make a division between the light and the darkness.<sup><a href='#'>&nbsp;+</a></sup> Then God saw that it was good. <sup><b>&nbsp;19&nbsp;</b></sup>And there was evening and there was morning, a fourth day.</p><p><sup><b>&nbsp;20&nbsp;</b></sup>Then God said: “Let the waters swarm with living creatures,<sup><a href='#'>&nbsp;*</a></sup> and let flying creatures fly above the earth across the expanse of the heavens.”<sup><a href='#'>&nbsp;*</a></sup><sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;21&nbsp;</b></sup>And God created the great sea creatures<sup><a href='#'>&nbsp;*</a></sup> and all living creatures<sup><a href='#'>&nbsp;*</a></sup> that move and swarm in the waters according to their kinds and every winged flying creature according to its kind. And God saw that it was good. <sup><b>&nbsp;22&nbsp;</b></sup>With that God blessed them, saying: “Be fruitful and become many and fill the waters of the sea,<sup><a href='#'>&nbsp;+</a></sup> and let the flying creatures become many in the earth.” <sup><b>&nbsp;23&nbsp;</b></sup>And there was evening and there was morning, a fifth day.</p><p><sup><b>&nbsp;24&nbsp;</b></sup>Then God said: “Let the earth bring forth living creatures<sup><a href='#'>&nbsp;*</a></sup> according to their kinds, domestic animals and creeping animals<sup><a href='#'>&nbsp;*</a></sup> and wild animals of the earth according to their kinds.”<sup><a href='#'>&nbsp;+</a></sup> And it was so. <sup><b>&nbsp;25&nbsp;</b></sup>And God went on to make the wild animals of the earth according to their kinds and the domestic animals according to their kinds and all the creeping animals of the ground according to their kinds. And God saw that it was good.</p><p><sup><b>&nbsp;26&nbsp;</b></sup>Then God said: “Let us<sup><a href='#'>&nbsp;+</a></sup> make man in our image,<sup><a href='#'>&nbsp;+</a></sup> according to our likeness,<sup><a href='#'>&nbsp;+</a></sup> and let them have in subjection the fish of the sea and the flying creatures of the heavens and the domestic animals and all the earth and every creeping animal that is moving on the earth.”<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;27&nbsp;</b></sup>And God went on to create the man in his image, in God’s image he created him; male and female he created them.<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;28&nbsp;</b></sup>Further, God blessed them, and God said to them: “Be fruitful and become many, fill the earth<sup><a href='#'>&nbsp;+</a></sup> and subdue it,<sup><a href='#'>&nbsp;+</a></sup> and have in subjection<sup><a href='#'>&nbsp;+</a></sup> the fish of the sea and the flying creatures of the heavens and every living creature that is moving on the earth.”</p><p><sup><b>&nbsp;29&nbsp;</b></sup>Then God said: “Here I have given to you every seed-bearing plant that is on the entire earth and every tree with seed-bearing fruit. Let them serve as food for you.<sup><a href='#'>&nbsp;+</a></sup><sup><b>&nbsp;30&nbsp;</b></sup>And to every wild animal of the earth and to every flying creature of the heavens and to everything moving on the earth in which there is life,<sup><a href='#'>&nbsp;*</a></sup> I have given all green vegetation for food.”<sup><a href='#'>&nbsp;+</a></sup> And it was so.</p><p><sup><b>&nbsp;31&nbsp;</b></sup>After that God saw everything he had made, and look! it was very good.<sup><a href='#'>&nbsp;+</a></sup> And there was evening and there was morning, a sixth day.</p>"
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
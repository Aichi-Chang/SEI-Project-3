
const cultureBData = (user) => {
  return [{

    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    year: 1925,
    review: 'The savage reviews that greeted F Scott Fitzgerald’s third novel – “no more than a glorified anecdote”; “for the season only” – failed to recognise something truly great; a near-perfect distillation of the hope, ambition, cynicism and desire at the heart of the American Dream. Other novels capture the allure of the invented self, from Stendhal’s/The Red and the Black/to Thomas Mann’s /Confessions of Felix Krull/, but Fitzgerald’s enigmatic Jay Gatsby casts a shadow that reaches to /Mad Men/’s Don Draper and beyond.',
    image: 'https://i.imgur.com/Mh20VXB.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Gabriel García Márquez',
    title: '100 Years of Solitude',
    year: 1967,
    review: 'The energy and enchantment of Garcia Marquez’s story of seven generations of the Buendia family in a small town in Colombia continue to enthral half a century on. Hauntings and premonitions allied to a journalistic eye for detail and a poetic sensibility make Marquez’s magical realism unique.',
    image: 'https://i.imgur.com/cAMR3MU.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },  
  {
    author: 'Michelle Obama',
    title: 'Becoming Michelle',
    year: 2018,
    review: 'Becoming is the memoir of former United States first lady, Michelle Obama, published in 2018.  Described by the author as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the, White House, her public health campaign, and her role as a mother',
    image: 'https://i.imgur.com/358mmhB.jpg',
    category: 'non-fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Stephen Fry',
    title: 'Mythos',
    year: 2017,
    review: 'An entertaining and interesting book about ancient Greek mythology written in a style that is recognisable as Stephen Fry (if you\'ve ever watched him on QI). Fry\'s writing style is (as I\'d imagine the man himself to be) charming, intelligent and informative with a sense of wit and of course there are plenty of footnotes as he adds extra bits of information as he tells the stories. Also, he does add a sources section at the end of the book for those who wish to delve further which I think is an excellent idea. I would recommend this book to anyone who has an interest about ancient Greek mythology (although not sure if it\'s ideal for children), especially if you want to learn about the Greek Gods, the Titans and the many myths and stories associated with them but rather than using this as a definitive guide it should be seen as an entry point to a fascinating subject.',
    image: 'https://i.imgur.com/I92tjKc.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Roald Dahl',
    title: 'Charlie and the Chocolate Factory',
    year: 1964,
    review: 'Harry Potter may be more popular, but Willy Wonka is altogether weirder. From the overwhelming poverty experienced by Charlie Bucket and his family, to the spoilt, greedy, brattish children who join Charlie on his trip to Willy Wonka’s phantasmagorical sweet factory there is nothing artificially sweetened in Roald Dahl’s startling work of fantasy.',
    image: 'https://i.imgur.com/fMsFqQm.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'JK Rowling',
    title: 'Harry Potter and the Philosopher’s Stone',
    year: 1997,
    review: 'My childhood and adolescence summed up in the fictional world Rowling created in the 90s. Harry Potter’s life is miserable. His parents are dead and he’s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he’s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry. After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry. Though Harry’s first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it’s his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined. Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come. This wonderfully imaginative world is a classic for children now, and a compelling read for all ages.',
    image: 'https://i.imgur.com/NSqGuA1.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Bram Stoker',
    title: 'Dracula',
    year: 1897,
    review: 'Whatever passed between Irish theatre manager Bram Stoker and the Hungarian traveller and writer Ármin Vámbéry when they met in London and talked of the Carpathian Mountains, it incubated in the Gothic imagination of Stoker into a work that has had an incalculable influence on Western culture. It’s not hard to read the Count as a shadowy sexual figure surprising straitlaced Victorian England in their beds, but in Stoker’s hands he’s also bloody creepy.',
    image: 'https://i.imgur.com/adW2fOE.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Mary Shelley',
    title: 'Frankenstein',
    year: 1823,
    review: 'Shelley was just 18 when she wrote Frankenstein as part of a challenge with her future husband, Percy Shelley, and Lord Byron, to concoct the best horror story. Put down the green face paint: Frankenstein\’s monster is a complex creation who yearns for sympathy and companionship. Some 200 years after it was first published, the gothic tale feels more relevant than ever as genetic science pushes the boundaries of what it means to create life.',
    image: 'https://i.imgur.com/l8HuOA3.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Leo Tolstoy',
    title: 'Anna Kerinina',
    year: 1877,
    review: 'Andrew Davies’s recent TV adaptation of War and Peace reminded those of us who can’t quite face returning to the novel’s monstrous demands just how brilliantly Tolstoy delineates affairs of the heart, even if the war passages will always be a struggle. In Anna Karenina – enormous, too! – the great Russian novelist captures the erotic charge between the married Anna and the bachelor Vronsky, then drags his heroine through society’s scorn as their affair takes shape, without ever suggesting we move from her side.',
    image: 'https://i.imgur.com/xB0REG2.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Edward Said',
    title: 'Orientalism',
    year: 1978,
    review: 'Orientalism is a 1978 book by Edward W. Said, in which the author discusses Orientalism, defined as the West\'s patronizing representations of \"The East\"—the societies and peoples who inhabit the places of Asia, North Africa, and the Middle East. According to Said, orientalism (the Western scholarship about the Eastern World) is inextricably tied to the imperialist societies who produced it, which makes much Orientalist work inherently political and servile to power',
    image: 'https://i.imgur.com/MbrFrsz.jpg',
    category: 'non-fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Robert Winder',
    title: 'Bloody Foreigners',
    year: 2004,
    review: 'Immigration is one of the most important stories of modern British life, yet it has been happening since Caesar first landed in 53 BC. Ever since the first Roman, Saxon, Jute and Dane leaped off a boat we have been a mongrel nation. Our roots are a tangled web. From Huguenot weavers fleeing French Catholic persecution in the 18th century to South African dentists to Indian shopkeepers; from Jews in York in the 12th century (who had to wear a yellow star to distinguish them and who were shamefully expelled by Edward I in 1272) to the Jamaican who came on board the Windrush in 1947. The first Indian MP was elected in 1892, Walter Tull, the first black football player played (for Spurs and Northampton) before WW1 (and died heroically fighting for the allies in the last months of the war); in 1768 there were 20,000 black people in London (out of a population of 600,000 - a similar percentage to today). The 19th century brought huge numbers of Italians, Irish, Jews (from Russia and Poland mainly), Germans and Poles. This book draws all their stories together in a compelling narrative.',
    image: 'https://i.imgur.com/oGjz6RQ.jpg',
    category: 'non-fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Helen Fielding',
    title: 'Bridget Jone\s Dairy',
    year: 1999,
    review: 'Written in the form of a personal diary, the novel chronicles a year in the life of Bridget Jones, a thirty-something single working woman living in London. She writes about her career, self-image, vices, family, friends, and romantic relationships. By 2006, the book had sold over two million copies worldwide. Critics have credited Fielding\'s novel as the "ur-text" of the contemporary chick lit movement.',
    image: 'https://i.imgur.com/PoW6c7n.jpg',
    category: 'fiction',
    rating: '★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Stephen King',
    title: 'Pet Sematary',
    year: 1983,
    review: 'Pet Sematary is a 1983 horror novel by American writer Stephen King. The novel was nominated for a World Fantasy Award for Best Novel in 1986, and adapted into two films: one in 1989 and another in 2019.',
    image: 'https://i.imgur.com/aVVchYg.jpg',
    category: 'fiction',
    rating: '★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Pierre Choderlos de Laclos',
    title: 'Dangerous Liaisons',
    year: 1989,
    review: 'The most deliciously wicked experience in literature, this epistolary novel introduces us to the Marquise de Merteuil and Vicomte de Valmont, who play cruel games of sexual conquest on their unwitting victims. The Marquise’s justification for her behaviour – “I, who was born to revenge my sex and master yours” – will strike a chord in the #MeToo era, but emotions, even love, intrude, to the point where Laclos’s amorality becomes untenable. Sexy but very, very bad.',
    image: 'https://i.imgur.com/PX1kFfz.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Salman Rushdie',
    title: 'Midnight’s Children',
    year: 1981,
    review: 'The protagonist of Rushdie’s most celebrated novel is born at the exact moment India gains independence. He’s also born with superpowers, and he’s not the only one. In an audacious and poetic piece of magical realism, Rushdie tells the story of India’s blood-soaked resurgence via a swathe of children born at midnight with uncanny abilities.',
    image: 'https://i.imgur.com/nbnSdQY.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'William Makepeace Thackeray',
    title: 'Vanity Fair',
    year: 1847,
    review: 'A bewitching beauty who bends men to her will using charm, sex, and guile. An awkward man who remains loyal to his friends, even when those friends don’t deserve his affection. A mother who cannot get over the loss of her husband and devotes her life to her child. Though written in 1847-48, William Makepeace Thackeray’s /Vanity Fair/ is peopled by types who remain familiar today. The novel’s early nineteenth-century setting immerses us in a strange world of social stratification, moral strictures, and self-conscious sentiment. Yet its characters—from dissolute playboys and self-important heirs to judgmental aunts and finicky gourmands—are instantly recognizable.',
    image: 'https://i.imgur.com/seqkzam.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },{
    author: 'Harper Lee',
    title: 'To Kill a Mocking Bird',
    year: 1960,
    review: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. A timeless plea for justice in the setting of America’s racist South during the depression years, Lee’s novel caused a sensation. Her device was simple but incendiary: look at the world through the eyes of a six-year-old, in this case, Jean Louise Finch, whose father is a lawyer defending a black man falsely accused of raping a white woman. Lee hoped for nothing but “a quick and merciful death at the hands of the reviewers”: she won the Pulitzer and a place on the curriculum. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.',
    image: 'https://i.imgur.com/Jxzbavx.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'William Golding',
    title: 'Lord of the Flies',
    year: 1954,
    review: 'Anyone who has ever suspected that children are primitive little beasties will nod sagely as they read Golding’s classic. His theory is this: maroon a bunch of schoolboys on an island, and watch how quickly the trappings of decent behaviour fall away. Never has a broken pair of spectacles seemed so sinister, or civilisation so fragile.',
    image: 'https://i.imgur.com/hP6Na9Q.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Charlotte Brontë',
    title: 'Jane Eyre',
    year: 1847,
    review: 'Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?',
    image: 'https://i.imgur.com/xraGxd3.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Philip Pullman',
    title: 'The Golden Compass',
    year: 1995,
    review: 'The first book in Philip Pullman’s \“His Dark Materials\” trilogy introduces us to the series\’ heroine, a 12-year-old girl named Lyra. This precocious young orphan lives in the care of scholars at Jordan College in Oxford, England — albeit in an alternate universe. Lyra is headstrong and prone to getting into trouble, and she\’s accompanied always by her dæmon (pronounced demon) Pantalaimon, a shape-shifting animal spirit who embodies her soul. All humans in Lyra’s world, we learn, have dæmons who eventually take on a single animal form when children reach adolescence. The Golden Compass begins when Lyra clambers into a wardrobe to avoid detection . . . a choice that unwittingly launches her into a universe-altering adventure. Lurking in the wardrobe, she hears her uncle, an iconoclastic explorer named Lord Asriel, documenting the findings about a mysterious substance called Dust to a group of scholars. Several events then occur almost simultaneously: Lyra is given a truth-telling device called an alethiometer (the golden compass) and told to keep it secret; she begins to hear rumors of children disappearing without a trace; and she\’s whisked into the care of a glamorous but ruthless agent of the Church named Mrs. Coulter. Lyra soon discovers that the Church is also desperate to learn about Dust — a substance they believe is somehow connected to original sin — and that Mrs. Coulter is spearheading chilling experiments on children in her pursuit of \“truth.\” Specifically, she’s separating children from their dæmons.',
    image: 'https://i.imgur.com/JjPQVxV.jpg',
    category: 'fiction',
    rating: '★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Charles Dickens',
    title: 'Great Expectations',
    year: 1812,
    review: 'Dickens was the social conscience of the Victorian age, but don\’t let that put you off. Great Expectations is the roiling tale of the orphaned Pip, the lovely Estella, and the thwarted Miss Havisham. First written in serial form, you barely have time to recover from one cliffhanger before the next one beckons, all told in Dickens\’ luxuriant, humorous, heartfelt prose.',
    image: 'https://i.imgur.com/v1rG4Cb.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Yuval Noah Harari',
    title: 'Sapiens',
    year: 2011,
    review: 'Harari, who is an Israeli historian, takes on a daunting challenge: to tell the entire history of us, the human race, in a mere 400 pages. I\’ve always been a fan of writers who try to connect the dots and make sense of the sweep of history. Probably no one has done it better than David Christian in his Big History lectures, which distill 13.7 billion years of history, from the Big Bang on, into a manageable framework that spans biology, physics, humanities, and the social sciences. While Harari concerns himself with a shorter time frame, the last 70,000 years of human history, his job is no less difficult. He sets out to explain how we, Homo sapiens (Latin for “wise person”), came to dominate the Earth and what may lie ahead for our species. One hundred thousand years ago, Homo sapiens was just one of a number of different human species, all competing for supremacy. Just as today we see different species of bears or pigs, there were different species of humans. While our own ancestors lived mainly in East Africa, our relatives, Homo neanderthalensis, better known as Neanderthals, inhabited Europe. Another species, Homo erectus, populated Asia, and the island of Java was home to Homo soloensis. Each species adapted to its own environment. Some were big, fearsome hunters, while others were dwarf-like plant gatherers. As different as each species may have been, there is evidence of interbreeding among them. Scientists mapping the Neanderthal genome, for example, discovered that people of European origin today have a small percentage of genes from their Neanderthal ancestors. (That will make an interesting addition to many family trees!) It’s a fascinating read for those interested in anthropology.',
    image: 'https://i.imgur.com/OyeWDkj.jpg',
    rating: '★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    year: 1813,
    review: 'It is a fact universally acknowledged that every list of great books must include Pride and Prejudice. Don\’t be fooled by the bonnets and balls: beneath the sugary surface is a tart exposé of the marriage market in Georgian England. For every lucky Elizabeth, who tames the haughty, handsome Mr Darcy and learns to know herself in the process, there’s a Charlotte, resigned to life with a drivelling buffoon for want of a pretty face. Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \“her own darling child” and its vivacious heroine, Elizabeth Bennet, \“as delightful a creature as ever appeared in print.\” The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen’s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.',
    image: 'https://i.imgur.com/ZJoJYjZ.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Emily Brontë',
    title: 'Wuthering Heights',
    year: 1847,
    review: 'Will there ever be a novel that burns with more passionate intensity than Wuthering Heights? The forces that bring together its fierce heroine Catherine Earnshaw and cruel hero Heathcliff are violent and untameable, yet rooted in a childhood devotion to one another, when Heathcliff obeyed Cathy’s every command. It’s impossible to imagine this novel ever provoking quiet slumbers; Emily Brontë’s vision of nature blazes with poetry.',
    image: 'https://i.imgur.com/69Efl4n.jpg',
    category: 'fiction',
    rating: '★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Thomas Hardy',
    title: 'Tess of the d’Urbervilles',
    year: 1891,
    review: 'A good 125 years before #MeToo, Thomas Hardy skewered the sexual hypocrisy of the Victorian age in this melodramatic but immensely moving novel. Tess is a naïve girl from a poor family who is raped by a wealthy landowner. After the death of her baby, she tries to build a new life, but the \“shame\” of her past casts a long shadow. Read this if you want to understand the rotten culture at the root of victim blaming.  A read that is truly ahead of its time.',
    image: 'https://i.imgur.com/MDOnnxs.jpg',
    category: 'fiction',
    rating: '★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Vladimir Nabokov',
    title: 'Lolita',
    year: 1955,
    review: 'Banned from entering the UK in its year of publication, 1955, Vladimir Nabokov’s astonishingly skilful and enduringly controversial work of fiction introduces us to literary professor and self-confessed hebephile Humbert Humbert, the perhaps unreliable narrator of the novel. He marries widow Charlotte Haze only to get access to her daughter, 12-year-old Dolores, nicknamed Lo by her mother, or as Humbert calls her \“Lolita, light of my life, fire of my loins. My sin, my soul.\” Cloaking his abuse in the allusive language of idealised love does not lessen Humbert’s crimes, but allows Nabokov to skewer him where he hides.',
    image: 'https://i.imgur.com/wJojEAJ.jpg',
    category: 'fiction',
    rating: '★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Arundhati Roy',
    title: 'The God of Small Things',
    year: 1997,
    review: 'Roy won the 1997 Booker Prize with her debut novel, a powerful intergenerational tale of love that crosses caste lines in southern India, and the appalling consequences for those who break the taboos dictating \“who should be loved, and how. And how much.\” Sex, death, religion, the ambivalent pull of motherhood: it’s all there in this beautiful and haunting book.',
    image: 'https://i.imgur.com/r2dswbf.jpg',
    category: 'fiction',
    rating: '★★★★',
    user: user[0],
    comments: []
  },
  {
    author: 'Anthony Burgess',
    title: 'A Clockwork Orange',
    year: 1972,
    review: 'From the moment we meet Alex and his three droogs in the Korova milk bar, drinking moloko with vellocet or synthemesc and wondering whether to chat up the devotchkas at the counter or tolchock some old veck in an alley, it’s clear that normal novelistic conventions do not apply. Anthony Burgess’s slim volume about a violent near-future where aversion therapy is used on feral youth who speak Nadsat and commit rape and murder, is a dystopian masterpiece.',
    image: 'https://i.imgur.com/JvTHBe1.jpg',
    category: 'fiction',
    rating: '★★★★★',
    user: user[0],
    comments: []
  }
  ]
}

module.exports = cultureBData
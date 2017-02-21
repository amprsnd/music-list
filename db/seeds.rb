# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

names = ['RUF', 'Audi', 'AWZ', 'Barkas', 'Bitter', 'BMW', 'Borgward', 'Büssing', 'DKW', 'Glas', 'Goliath', 'Hansa', 'Heinkel', 'Horch', 'Lloyd', 'Maybach', 'MAN', 'Mercedes-Benz', 'Multicar', 'NAG', 'Neoplan', 'Opel', 'Porsche', 'Robur', 'Simson', 'Trabant', 'Volkswagen', 'Wanderer', 'Wartburg', 'Acura', 'Daihatsu', 'Datsun', 'Hino', 'Honda', 'Infiniti', 'Isuzu', 'Lexus', 'Mazda', 'Mitsubishi Motors', 'Nissan', 'Subaru', 'Suzuki', 'Toyota', 'Dome', 'ASL', 'Scion', 'Mitsuoka', 'Aixam', 'Bugatti', 'Citroën', 'Peugeot', 'Renault', 'Matra']
names_total = names.length - 1

genres = ['Blues' , 'Classic Rock' , 'Country' , 'Dance' , 'Disco' , 'Funk' , 'Grunge' , 'Hip-Hop' , 'Jazz' , 'Metal' , 'New Age' , 'Oldies' , 'Other' , 'Pop' , 'R&B' , 'Rap' , 'Reggae' , 'Rock' , 'Techno' , 'Industrial' , 'Alternative' , 'Ska' , 'Death Metal' , 'Pranks' , 'Soundtrack' , 'Euro-Techno' , 'Ambient' , 'Trip-Hop' , 'Vocal' , 'Jazz+Funk' , 'Fusion' , 'Trance' , 'Classical' , 'Instrumental' , 'Acid' , 'House' , 'Game' , 'Sound Clip' , 'Gospel' , 'Noise' , 'Alternative Rock' , 'Bass' , 'Soul' , 'Punk' , 'Space' , 'Meditative' , 'Instrumental Pop' , 'Instrumental Rock' , 'Ethnic' , 'Gothic' , 'Darkwave' , 'Techno-Industrial' , 'Electronic' , 'Pop-Folk' , 'Eurodance' , 'Dream' , 'Southern Rock' , 'Comedy' , 'Cult' , 'Gangsta' , 'Top ' , 'Christian Rap' , 'Pop/Funk' , 'Jungle' , 'Native US' , 'Cabaret' , 'New Wave' , 'Psychadelic' , 'Rave' , 'Showtunes' , 'Trailer' , 'Lo-Fi' , 'Tribal' , 'Acid Punk' , 'Acid Jazz' , 'Polka' , 'Retro' , 'Musical' , 'Rock & Roll' , 'Hard Rock' , 'Folk' , 'Folk-Rock' , 'National Folk' , 'Swing' , 'Fast Fusion' , 'Bebob' , 'Latin' , 'Revival' , 'Celtic' , 'Bluegrass' , 'Avantgarde' , 'Gothic Rock' , 'Progressive Rock' , 'Psychedelic Rock' , 'Symphonic Rock' , 'Slow Rock' , 'Big Band' , 'Chorus' , 'Easy Listening' , 'Acoustic' , 'Humour' , 'Speech' , 'Chanson' , 'Opera' , 'Chamber Music' , 'Sonata' , 'Symphony' , 'Booty Bass' , 'Primus' , 'Porn Groove' , 'Satire' , 'Slow Jam' , 'Club' , 'Tango' , 'Samba' , 'Folklore' , 'Ballad' , 'Power Ballad' , 'Rhytmic Soul' , 'Freestyle' , 'Duet' , 'Punk Rock' , 'Drum Solo' , 'Acapella' , 'Euro-House' , 'Dance Hall' , 'Goa' , 'Drum & Bass' , 'Club-House' , 'Hardcore' , 'Terror' , 'Indie' , 'BritPop' , 'Negerpunk' , 'Polsk Punk' , 'Beat' , 'Christian Gangsta' , 'Heavy Metal' , 'Black Metal' , 'Crossover' , 'Contemporary C' , 'Christian Rock' , 'Merengue' , 'Salsa' , 'Thrash Metal' , 'Anime' , 'JPop' , 'SynthPop']
genres_total = genres.length - 1

titles = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Myanmar/Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Great Britain', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel and the Occupied Territories', 'Italy', 'Ivory Coast (Cote d`Ivoire)', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyz Republic (Kyrgyzstan)', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pacific Islands', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent`s & Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic (Slovakia)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United States of America (USA)', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']
titles_total = titles.length - 1

750.times do

  random_artists = [
      "Duet #{names[rand(names_total)]}",
      "Trio #{names[rand(names_total)]} #{names[rand(names_total)]}",
      "#{names[rand(names_total)]} #{names[rand(names_total)]} Quartet",
      "#{names[rand(names_total)]} #{names[rand(names_total)]} Band",
  ]


  random_titles = [
      "If You're Going To #{titles[rand(titles_total)]}",
      "#{titles[rand(titles_total)]} Dreamin'",
      "Englishman in #{titles[rand(titles_total)]}",
      "The Girl From #{titles[rand(titles_total)]}",
      "Another Brick in the #{titles[rand(titles_total)]}"
  ]

  random_artist = random_artists[rand(4)]
  random_title  = random_titles[rand(5)]
  random_genre  = genres[rand(genres_total)]
  random_year   = rand(1950..2017)

  Track.create(
      artist: random_artist,
      title: random_title,
      genre: random_genre,
      year: random_year
  )

end
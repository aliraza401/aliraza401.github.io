let myArray = [
  {
    info: `1. Basic Structure`,
    code: `
&lt;!DOCTYPE html&gt;  
&lt;html lang="en"&gt;
  &lt;head&gt;
      &lt;meta charset="UTF-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt; 
  &lt;body&gt;

  &lt;/body&gt;
&lt;/html&gt;`,
  },
  {
    info: `2. image Tag`,
    code: `
&lt;img src="" alt="description" width="100" height="48" /&gt;`,
  },
  {
    info: `3. a Tag`,
    code: `
&lt;a href="mailto:me@ruwix.com?Subject=Hi%20mate" target="_blank"&gt;Send Mail&lt;/a&gt;`,
  },
  {
    info: `4. iframe`,
    code: `
&lt;iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"&gt;&lt;/iframe&gt;`,
  },
  {
    info: `5. Abbreviation`,
    code: `
&lt;p&gt;&lt;abbr&gt; title="Hypertext Markup Language"&gt;HTML&lt;/abbr&gt;&lt;/p&gt;`,
  },
  {
    info: `6. Video`,
    code: `
&gtvideo&lt width="320" height="240" controls&lt
  &gtsource src="movie.mp4" type="video/mp4"&lt
  &gtsource src="movie.ogg" type="video/ogg"&lt
Your browser does not support the video tag.
&gt/video&lt`,
  }, 
  {
    info: `7. Audio`,
    code: `
&lt;audio&gt; controls="controls"&gt;
&lt;source src="sound.ogg" type="audio/ogg" /&gt;
&lt;source src="sound.mp3" type="audio/mpeg" /&gt;
No audio support.
&lt;/audio&gt;`,
  },
  {
    info: `8. Media`,
    code: `
@media only screen and (max-width: 768px) {

}`,
  },
  {
    info: `9. SVG`,
    code: `
&gtsvg width="100" height="100"&lt
  &gtcircle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&lt
&gt/svg&lt`,
  },
  {
    info: `10. Form`,
    code: `
&gtform&lt
  &gtlabel&lt for="fname"&ltFirst name:&gt/label&lt&gtbr&lt
  &gtinput type="text" id="fname" name="fname"&lt&gtbr&lt
  &gtlabel&lt for="lname"&ltLast name:&gt/label&lt&gtbr&lt
  &gtinput type="text" id="lname" name="lname"&lt
&gt/form&lt`,
  },
  {
    info: `11. input Types`,
    code: `
&ltinput type="button"&gt
&ltinput type="checkbox"&gt
&ltinput type="color"&gt
&ltinput type="date"&gt
&ltinput type="datetime-local"&gt
&ltinput type="email"&gt
&ltinput type="file"&gt
&ltinput type="hidden"&gt
&ltinput type="image"&gt
&ltinput type="month"&gt
&ltinput type="number"&gt
&ltinput type="password"&gt
&ltinput type="radio"&gt
&ltinput type="range"&gt
&ltinput type="reset"&gt
&ltinput type="search"&gt
&ltinput type="submit"&gt
&ltinput type="tel"&gt
&ltinput type="text"&gt
&ltinput type="time"&gt
&ltinput type="url"&gt
&ltinput type="week"&gt`,
  },
];

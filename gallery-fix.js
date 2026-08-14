// Correct the original material grouping: this entrance photo belongs to Longmen, Luoyang.
const longmenEntrance = photos.find(photo => photo[1] === '3ad0873dc29246c5ae8ec251c3da2539');
if (longmenEntrance) {
  longmenEntrance[0] = 'luoyang';
  longmenEntrance[2] = '洛阳龙门 · 入园留影';
  draw();
}

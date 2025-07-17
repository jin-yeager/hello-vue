<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue'
let flag_bw = true;
let flag_end = false;
const arr2D = ref([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])

const ref2D = ref([
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],

  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],

  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],

  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],

])


const myclick = (e) => {
  if (flag_end) {
    return;
  }
  let str_ij = e.target.alt;
  let arr_ij = str_ij.split(",");
  let i = parseInt(arr_ij[0]);
  let j = parseInt(arr_ij[1]);

  if (arr2D.value[i][j] > 0) {
    return;
  }

  let stone = -1;
  if (flag_bw) {
    arr2D.value[i][j] = 1;
    stone = 1;
  } else {
    arr2D.value[i][j] = 2;
    stone = 2;
  }
  let up = getUP(i, j, stone);
  let dw = getDW(i, j, stone);
  let ri = getRI(i, j, stone);
  let le = getLE(i, j, stone);

  let ur = getUR(i, j, stone);
  let ul = getUL(i, j, stone);
  let dr = getDR(i, j, stone);
  let dl = getDL(i, j, stone);

  let d1 = dl + ur + 1;
  let d2 = le + ri + 1;
  let d3 = dr + ul + 1;
  let d4 = up + dw + 1;

  console.log(up,dw,ri,le,  up,up,up,up);

  console.log(d1);
  console.log(d2);
  console.log(d3);
  console.log(d4);

  if (d1 == 5 || d2 == 5 || d3 == 5 || d4 == 5) {
    if (flag_bw) {
      setTimeout("alert('흑돌승리')");
    } else {
      setTimeout("alert('백돌승리')");
    }
    flag_end = true;

  }


  flag_bw = !flag_bw;

}


function getUP(i, j, stone) {
  console.log(i, j, stone)
  let ret = 0;
  try {
    while (true) {
      i--;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getDW(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      i++;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getRI(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      j++;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getLE(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      j--;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}


function getUR(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      i--;
      j++;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getUL(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      i--;
      j--;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getDR(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      i++;
      j++;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}
function getDL(i, j, stone) {
  let ret = 0;
  try {
    while (true) {
      i++;
      j--;
      if (arr2D.value[i][j] == stone) {
        ret++;
      } else {
        return ret;
      }
    }
  } catch (error) {
    return ret;
  }
}

function fn_reset() {
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      arr2D.value[i][j] = 0;
    }
  }
  flag_bw = true;
  flag_end = false;
}

</script>

<template>
  오목화면<br/>
  <button @click="fn_reset">리셋</button>
  <table>
    <tbody>

      <tr v-for="(r, ri) in arr2D" :key="ri">
        <td v-for="(c, ci) in r" :key="ci">
        <td><img :alt="ri + `,` + ci" :src="`/` + arr2D[ri][ci] + `.png`" @click="myclick" ref="ref2D[ri][ci]" /></td>
        </td>
      </tr>


    </tbody>




  </table>

</template>

<style scoped>
table {
  border-collapse: collapse;
}

td {
  padding: 0;
}

img {
  display: block;
}
</style>

<template>
  <div class="test-wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h3>Главная страница</h3>
            <div class="row">
              <div class="col-12">
                <input type="radio" name="sum" id="main" value="0" v-model="sumType">
                <label for="main">Главная</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input type="radio" name="sum" id="secondary" value="1" v-model="sumType">
                <label for="secondary">Побочная</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label class="d-block" for="range">Задать длину матрицы</label>
                <input type="text" name="range" id="range" v-model="range" @change="createArr">
                <small class="d-block">Числа в матрице случайны</small>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="d-flex arr-row" v-for="(fRow, fRowIndex) in arrMain" :key="fRowIndex">
                  <div class="arr-row-num" v-for="(sRow, sRowIndex) in fRow" :key="sRowIndex">{{sRow}}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>Сумма: {{sum}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Diagonal from "../controller/diagonal";
  import GenerateArray from "../controller/generateArray"
  export default {
    name: "IndexComponent.vue",
    data: () => ({
      arrMain: [],
      sumType: '0',
      range: 10,
      sum: 0,
      diagonal: {},
      genArr: {},
    }),
    watch: {
      sumType(val) {
        this.sum = val === '0' ? this.diagonal.principalDiagonalSum() : this.diagonal.secondaryDiagonalSum();
      }
    },
    created() {
      this.genArr = new GenerateArray();
      this.diagonal = new Diagonal();
    },
    mounted() {
      this.createArr();
    },
    methods: {
      createArr() {
        this.arrMain = this.genArr.generate(this.range);
        this.diagonal.setArrayMatrix(this.arrMain, this.range);
        this.sum = this.diagonal.principalDiagonalSum();
      },
    },
  }
</script>

<style scoped lang="scss">
  .test-wrap {
    label {
      font-size: 14px;
    }
    input[type=radio], label {
      cursor: pointer;
    }
    .arr-row {
      .arr-row-num {
        width: 30px;
        text-align: center;
      }
    }
  }
</style>

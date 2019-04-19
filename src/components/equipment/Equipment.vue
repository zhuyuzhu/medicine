<template>
  <div class="equipment">
     
    <div class="item" v-for="(item, index) in equipmentList" :key="index">
      <div class="top">
      <h3>{{item.title}}</h3>
      <div class="top-right">
        <div class="more">
          <span class="iconfont">&#xe600;</span>
          <span>&nbsp;&nbsp;更多</span>
        </div>
        <span v-for="(v,i) in item.tips" :key="i">&nbsp;&nbsp;{{v}}</span>
      </div>
    </div>
    <div class="content">
      <img class="left-img" :src="item.srcImg" alt>
      <div class="cont-center">
        <div class="equipment-name">
          <div v-for="(v,i) in item.equipName" :key="i">
            <h4>{{v.h}}</h4>
            <span v-for="(x,y) in v.names" :key="y">{{x}}</span>
          </div>
        </div>
        <div class="brand">
          <div v-for="(v,i) in item.brand" :key="i">
            <img :src="v.img" alt>
            <span>{{v.name}}</span>
          </div>
        </div>
      </div>
      <div class="cont-right">
        <ul>
          <li v-for="(v,i) in item.equip" :key="i">
            <img :src="v.src" alt>
            <div>{{v.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['equipmentList']
};
</script>
<style lang='scss' scoped>
.equipment {
  width: 100%;
  min-width: 1200px;
  .item {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .top {
    background: #e7fdf7;
    position: relative;
    line-height: 40px;
    margin-left: 40px;
    h3 {
      display: inline-block;
      background: #51bf66;
      color: #fff;
      padding: 0 44px;
    }
    .top-right {
     
      vertical-align: -12px;
      position: absolute;
      right: 80px;
      top: 0px;
      .more {
        float: right;
        cursor: pointer;
      }
      .more:hover {
        color: #f40;
      }
      span {
        float: right;
        font-size: 14px;
        cursor: pointer;
      }
      span:hover {
        color: #f40;
      }
    }
  }
  .content {
    display: flex;
    // justify-content: space-evenly;
    .left-img {
      margin-left: 40px;
    }
    .cont-center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      border: 1px solid #51bf66;
      .equipment-name {
        height: 300px;
        div {
          margin: 30px;
          font-size: 12px;
          color: #333;
          span {
            cursor: pointer;
          }
          span:hover {
            color: #f40;
          }
          h4 {
            cursor: pointer;
            margin-bottom: 10px;
          }
        }
      }
      .brand {
        margin-left: 30px;
        margin-top: -40px;
        margin-bottom: 10px;
        div {
          position: relative;
          display: inline-block;
          margin: 5px;
          width: 110px;
          height: 45px;
          span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            line-height: 45px;
            text-align: center;
            color: #fff;
            background: #51bf66;
            opacity: 0;
            cursor: pointer;
          }
          span:hover {
            opacity: 1;
          }
        }
      }
    }
    .cont-right {
      // border: 1px solid black;
      ul {
        width: 700px;
        li {
          float: left;
          width: 150px;
          height: 170px;
          border: 1px solid transparent;
          text-align: center;
          cursor: pointer;
          margin: 10px;
          div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            padding: 10px 20px;
          }
        }
        li:hover {
          border: 1px solid #51bf66;
          div {
            color: #f40;
          }
        }
      }
    }
  }
}
</style>

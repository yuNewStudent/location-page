<template>
  <div class="attractions">
    <div class="attractions_h">
      <el-carousel :interval="5000" arrow="always" height="300px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <!-- <h3>{{ item.name}}</h3> -->
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="attractions_q">
      <div class="attractions_qt">
        <div class="attractions_qm">
          <h1>当季最热</h1>
        </div>
      </div>
      <div class="attractions_qc">
         <div class="attractions_qcl">
          <img src="../../assets/img/稻虾体验馆pic@2x.png">
         </div>
         <div class="attractions_qcr">
            <h1>
              稻虾体验馆
            </h1>
            <p>
                稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介，稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻。虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介。
            </p>
            <div class="attractions_qcrb">
                <div class="attractions_qcrbl">
                    ￥86.0
                </div>
                <div class="attractions_qcrbr">
                    查看更多
                </div>
            </div>
         </div>
      </div>
       <div class="attractions_qc">
         <div class="attractions_qcr">
            <h1>
              稻虾体验馆
            </h1>
            <p>
                稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介，稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻。虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介。
            </p>
            <div class="attractions_qcrb">
                <div class="attractions_qcrbl">
                    免费
                </div>
                <div class="attractions_qcrbr">
                    查看更多
                </div>
            </div>
         </div>
         <div class="attractions_qcl">
          <img src="../../assets/img/稻虾体验馆pic@2x.png">
         </div>
      </div>
    </div>
     <div class="attractions_q">
      <div class="attractions_qt">
        <div class="attractions_qm">
          <h1>人气好评</h1>
        </div>
      </div>
      <div class="attractions_qc">
         <div class="attractions_qcl">
          <img src="../../assets/img/稻虾体验馆pic@2x.png">
         </div>
         <div class="attractions_qcr">
            <h1>
              稻虾体验馆
            </h1>
            <p>
                稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介，稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻。虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介。
            </p>
            <div class="attractions_qcrb">
                <div class="attractions_qcrbl">
                    ￥86.0
                </div>
                <div class="attractions_qcrbr">
                    查看更多
                </div>
            </div>
         </div>
      </div>
       <div class="attractions_qc">
         <div class="attractions_qcr">
            <h1>
              稻虾体验馆
            </h1>
            <p>
                稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介，稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻。虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介稻虾体验馆简介。
            </p>
            <div class="attractions_qcrb">
                <div class="attractions_qcrbl">
                    免费
                </div>
                <div class="attractions_qcrbr">
                    查看更多
                </div>
            </div>
         </div>
         <div class="attractions_qcl">
          <img src="../../assets/img/稻虾体验馆pic@2x.png">
         </div>
      </div>
    </div>
    
    <div class="attractions_q">
      <div class="attractions_qt">
        <div class="attractions_qm">
          <h1>合作伙伴</h1>
        </div>
      </div>
      <div class="attractions_qch">
        <ul>
          <li>
            <img src="../../assets/img/联通logo—pic@2x.png">
          </li>
          <li>
            <img src="../../assets/img/联通logo—pic@2x.png">
          </li>
          <li>
            <img src="../../assets/img/联通logo—pic@2x.png">
          </li>
          <li>
            <img src="../../assets/img/联通logo—pic@2x.png">
          </li>
          <li>
            <img src="../../assets/img/联通logo—pic@2x.png">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagesbox: [
        {
          id: 0,
          name: "大雨村读书台2019第七届道武...",
          idView: require("../../assets/img/banner@2x.png")
        },
        {
          id: 1,
          name: "大雨村读书台2019第七届道武...",
          idView: require("../../assets/img/banner@2x.png")
        },
        {
          id: 2,
          name: "大雨村读书台2019第七届道武...",
          idView: require("../../assets/img/banner@2x.png")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.attractions {
  width: 100%;
  padding: 0px 10px;
}
.attractions_q {
  width: 100%;
}
.attractions_qm {
  width: 100%;
  height: 50px;
  background-image: url("../../assets/img/合作伙伴标题—底@2x.png");
  margin: 20px 0px;
  background-size: 100% 100%;
  margin: 0 auto;
}
.attractions_qm h1 {
  width: 300px;
  text-align: left;
  margin-left: 70px;
  line-height: 55px;
  color: #ffffff;
}
.attractions_qt {
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
}
.attractions_qc{
    width:1000px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 10px;
}
.attractions_qcl{
    width:550px;
    height:321px;
}
.attractions_qcl img{
    width:100%;
    height:322px;
}
.attractions_qcr{
    width:450px;
    height:320px;
    background:rgba(6,117,133,1);
}
.attractions_qcr h1{
    width:100%;
    height:26px;
    font-size:26px;
    text-align: center;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(248,191,18,1);
    line-height:36px;
    margin-top: 37px;
    margin-bottom: 10px;
}
.attractions_qcr p{
    width:90%;
    height:128px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:28px;
    margin: 0 auto;
    margin-bottom:30px;
}
.attractions_qcrb{
    display:flex;
}
.attractions_qcrbl{
    width:100px;
    height:40px;
    margin-left:27px;
    background:rgba(230,63,80,1);
    box-shadow:0px 2px 4px 0px rgba(49,8,13,0.7);
    border-radius:20px;
    font-size:24px;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(255,255,254,1);
    line-height:40px;
    text-align: center;
}
.attractions_qcrbr{
    width:100px;
    height:40px;
    border:2px solid rgba(182,188,189,1);
    color: #B6BCBD;
    line-height:40px;
    text-align: center;
    margin-left:185px;
}
.attractions_qc ul{
  width: 100%;
}
.attractions_qc li{
  width:300px;
  float: left;
  margin-left: 20px;
  position: relative;
}
.attractions_qc li img{
  width: 300px;
  height: 200px;
  text-align: center;
}
.attractions_qc li p{
  width: 299px;
  position: absolute;
  line-height: 40px;
  text-align: center;
  background:rgba(6,6,6,1);
  opacity:0.4;
  color: #F8BF12;
  bottom:2px;
}
.attractions_qc li h1{
  width:100px;
  position: absolute;
  top:10px;
  right:0;
  background:rgba(230,63,80,1);
  box-shadow:0px 2px 4px 0px rgba(49,8,13,0.7);
  border-radius:20px 0px 0px 20px;
  font-size:24px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(255,255,254,1);
  line-height:40px;
  text-align: center;
}
.attractions_qch ul{
  width: 80%;
  margin: 0 auto;
}
.attractions_qch li{
  width: 200px;
  float: left;
}
.attractions_qch li img{
  width: 200px;
  height: 200px;
  text-align: center;
}
</style>



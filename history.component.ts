.gridContainer{
  width: 100%;
  min-height: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.cardContainer{
  width: 90%;
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}

.gif{
 width: 25%;
 height: auto;
}

.gif img{
  width: 100%;
  height: 100%;
}


.search{
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search input{
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 10px 0px 0px 10px;
}


#searchButton{
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background-color: #325FFF;

}

#searchButton:hover{
  cursor: pointer;
  background-color: #87a1ff;

}

#searchButton img{
  height: 90%;
}

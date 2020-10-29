<div
        class=" image-flip col-12 col-md-6 col-xl-6 py-4"
        ontouchstart="this.classList.toggle('hover');"
      >
        {/* aca dentro  todo mis 2 cars*/}
        <div class="mainflip    w-100 h-100">
          {/* frente */}
          <div class="frontside  w-100 h-100 ">
            <div
              class="card text-center h-100 w-100"
              style={estiloscard.ajusteFront}
            >
              <div id="wrap-trasparent ">
                <span>
                  <p
                    style={{
                      marginTop: "2rem",
                      position: "absolute",
                      width: "100%",
                      zIndex: "8",
                      fontSize: "4rem",
                      textTransform: "uppercase",
                    }}
                    class="transparent-text"
                  >
                    {unobjecto.nombre}
                  </p>
                </span>
              </div>

              <img
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                  height: "100%",
                  width: "100%",
                }}
                src={unobjecto.media}
              ></img>
              {/* <video
                  style={{
                    height: "100%",
                    width: "100%",
                    clipPath:
                      "polygon(55% 0, 40% 48%, 55% 100%, 15% 100%, 0% 50%, 15% 0)",
                    objectFit: "fill",
                    objectPosition: "0 0",
                  }}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src={videocards} type="video/mp4" />
                </video> */}
            </div>
          </div>
          {/* frente */}

          {/* atras */}
          <div class="backside border border-primary   w-100 h-100 ">
            <div
              class="card text-center 
              w-100 h-100"
              style={estiloscard.ajusteBack}
            >
              {/* <table border={1}>
                
              </table> */}
              <table border={1} className="table h-100 w-100">
                <tbody>
                  <tr>
                    <td colspan="2">{unobjecto.nombre}</td>
                  </tr>
                  <tr>
                    <td colspan="2" className="bg-primary  ">
                      <Container
                        fluid
                        className="d-flex justify-content-around"
                      >
                        {unobjecto.areas.map(currenITEM => {
                          return <span>{currenITEM}</span>
                        })}
                      </Container>
                    </td>
                    <td rowspan="4">
                      <ul>
                        {unobjecto.servicio.map(currentItem => {
                          return <li colspan="2">{currentItem}</li>
                        })}
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  {unobjecto.descripccion.map(currentItem => {
                    return (
                      <tr>
                        <td colspan="2">{currentItem}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* atras */}
        </div>
        {/* aca dentro  todo mis 2 cars*/}
      </div>
      {/* areahover */}
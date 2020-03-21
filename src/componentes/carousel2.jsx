import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';
import './style.css';

const items = [
    [{ city: 'Barcelona', header:'City', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'New York', header:'City', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Amsterdam', header:'City', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'Paris', header:'City', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }],

    [{ city: 'New York', header:'City', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Barcelona', header:'City', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'Amsterdam', header:'City', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'Paris', header:'City', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }],

    [{ city: 'Barcelona', header:'City', caption:'Barcelona ', Url: "https://cronicaglobal.elespanol.com/uploads/s1/71/08/87/5/hoteles-ingresos-barcelona.jpeg" },
    { city: 'Amsterdam', header:'City', caption:'Amsterdam ', Url: "https://cdn.getyourguide.com/img/tour_img-1686378-146.jpg" },
    { city: 'New York', header:'City', caption:'New York ', Url: "https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg" },
    { city: 'Paris', header:'City', caption:'Paris ', Url: "https://cdn.getyourguide.com/img/tour_img-1294407-146.jpg" }]
];

const Carsouls = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}

            >
                    <Container  key={item.src} >
                        <Row >
                            {item.map((i) => {
                                return (
                                        <Col xs="6" >
                                                <img src={i.Url} alt={item.altText} width="380px" height="280px"/>                    
                                                <CarouselCaption captionHeader={i.header} captionText={i.caption} className="photo" />
                                        </Col>
                                )
                            })}
                        </Row>
                    </Container>

            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carsouls;
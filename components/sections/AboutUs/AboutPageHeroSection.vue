<template>
  <SectionContainer class="text-center">
    <GridTwoColumns>
      <div>
        <NuxtImg
          format="webp"
          src="/images/charter-bus.jpg"
          alt="Happy Kids"
          quality="80"
        />
      </div>
      <div class="p-4">
        <ParagraphSubHeadingHero>
          {{ IntroText.SubHeading }}
        </ParagraphSubHeadingHero>
        <HeadlineOneHero>
          {{ IntroText.Heading }}
        </HeadlineOneHero>
        <ParagraphDescriptionHero>
          {{ IntroText.Description }}
        </ParagraphDescriptionHero>
        <CardDeckThreeColumns class="hidden sm:block">
          <Card
            v-for="Feature in Featured"
            :key="Feature.id"
            :title="Feature.title"
            :description="Feature.description"
          />
        </CardDeckThreeColumns>

        <CtaButton :to="CTA.to"> {{ CTA.text }} </CtaButton>
      </div>
    </GridTwoColumns>
  </SectionContainer>
</template>

<script>
export default {
  name: "HomepageHeroSection",
  data() {
    return {
      IntroText: {
        SubHeading:
          "Embark on a Journey of Comfort, Convenience, and Exceptional Service",
        Heading: "About Good Time Travel",
        Description:
          "Good Time Travel is a nationwide leading bus charter company providing quality transportation and personal service for point-to-point excursions, long-distance, overnight trips, special events and more. No matter where you are traveling in the United States, our bus charter rentals offer safe, reliable transportation at affordable rates for both large and small groups. We pride ourselves on delivering extensive services to fulfill all your transportation needs with first-rate customer service and safety as our top priorities. Our experienced staff will support and guide you from the first call to the last mile so that your bus rental and trip goes exactly as planned.",
      },
      Featured: [
        {
          id: 1,
          title: "Unmatched Comfort",
          description:
            "Travel in style and relaxation with our luxurious reclining seats and spacious interiors, ensuring a smooth and enjoyable ride for all passengers.",
        },
        {
          id: 2,
          title: "Convenient Amenities",
          description:
            "Stay connected and entertained throughout your journey with onboard flat screen monitors and charging ports, providing entertainment and power at your fingertips.",
        },
        {
          id: 3,
          title: "Expert Service",
          description:
            "Our dedicated and friendly staff are committed to providing top-notch service, from assistance with loading luggage to ensuring a safe and pleasant travel experience for all.",
        },
      ],
      CTA: {
        to: "/get-started",
        text: "Get Started Now!",
      },
    };
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.full-width-height {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
}
</style>

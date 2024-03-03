<template>
  <SectionContainer class="text-center">
    <GridTwoColumns>
      <div>
        <!-- <NuxtImg
          format="webp"
          src="/images/charter-bus.jpg"
          alt="Happy Kids"
          quality="80"
          sizes="sm:1200px md:1200px lg:2000px xl:2000px xxl:2500px 2xl:3000px"
        /> -->
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
        Heading:
          "Explore Boundless Adventures with Good Time Travel Bus Charters",
        Description:
          "At Good Time Travel, we redefine the travel experience with our premier bus charter services. From scenic road trips to group excursions, we prioritize your comfort and satisfaction every step of the way. With our luxurious amenities, expert staff, and commitment to excellence, your journey with us is guaranteed to be memorable and stress-free.",
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

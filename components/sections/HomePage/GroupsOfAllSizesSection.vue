<template>
  <BasicSection class="container mx-auto mt-20">
    <GridTwoColumns>
      <div class="px-4 sm:px-8">
        <NuxtImg
          format="webp"
          src="/images/happy-kids.jpg"
          sizes="sm:217px md:323px lg:376px xl:504px xxl:632px 2xl:700px"
          alt="Happy Kids"
          quality="80"
          loading="lazy"
        />
      </div>
      <div class="px-4 sm:px-8">
        <HeadlineTwo>{{ IntroText.Headline }}</HeadlineTwo>
        <ParagraphDescription>
          {{ IntroText.description }}
        </ParagraphDescription>
      </div>
    </GridTwoColumns>
  </BasicSection>
</template>

<script>
export default {
  name: "Ideal Customers Section",
  props: {
    title: String,
    description: String,
    mediaFirst: Boolean,
    subTitle: String,
  },
  data() {
    return {
      IntroText: {
        SubHeading:
          "To Expand Your Business, Increase Online Leads, Calls, And Revenue",
        Headline: "Groups of All Sizes",
        description:
          "Every trip comes with its own unique needs. Good Time Travel's charter services are designed to provide a comfortable, smooth, and relaxing ride. Whether multiple pick-up locations or routine options, we will work hard to ensure your traveling needs are met to the best of our ability.",
      },
    };
  },
};
</script>
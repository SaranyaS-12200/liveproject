import React from "react";

function Project() {
  const data = [
    {
      //   Amali By La sa Ra
      src: "https://open.spotify.com/embed/episode/6kV0KsGd3ijiT0tf6TsLQR?utm_source=generator",
    },
    {
      // <!-- Kan kodukka Vandhavan -->
      src: "https://open.spotify.com/embed/episode/5BJpuW0RvhCD4eeGEP15DX?utm_source=generator",
    },
    {
      //    <!-- Appavin Vandi -->

      src: "https://open.spotify.com/embed/episode/3IXL2eidIOPlQCWvhSy7cQ?utm_source=generator",
    },
    {
      // <!-- Poochi Dialogue  -->
      src: "https://open.spotify.com/embed/episode/6QIgv9Rx0BVxh9qfsDGzkv?utm_source=generator",
    },
    {
      //   <!-- Nayayangal  -->
      src: "https://open.spotify.com/embed/episode/4r1aa3nrHFekxp9dGdX27t?utm_source=generator",
    },
    {
      // <!-- Power of habit -->
      src: "https://open.spotify.com/embed/episode/4ZMoUAyB8bNOIfyGQc6LcB?utm_source=generator",
    },
    {
      //  <!-- moondru kanavugal -->
      src: "https://open.spotify.com/embed/episode/37tXPHQomN2XpVidjuYgCF?utm_source=generator",
    },
    {
      // <!-- Edhu Nijam -->
      src: "https://open.spotify.com/embed/episode/665KQXzvojjMhB8SHrOObr?utm_source=generator",
    },
    {
      // <!-- Tiruchenkunnur -->

      src: "https://open.spotify.com/embed/episode/1Lp3YqJUCBhvrOqEY3EhXq?utm_source=generator",
    },
    {
      //   <!-- sumaithangi -->
      src: "https://open.spotify.com/embed/episode/0IuYGU0Yfv1Q7iMSRfTcVh?utm_source=generator",
    },
    {
      // <!-- upto 10 -->
      // <!-- Thimala -->

      src: "https://open.spotify.com/embed/episode/1rcLqXtug6m7YoVZyVy5iI?utm_source=generator",
    },
    {
      // <!-- kalkuruthu -->
      src: "https://open.spotify.com/embed/episode/0NCKJtJKCocsyFXboTqXLs?utm_source=generator",
    },
    {
      //    <!-- corportate chanakya -->
      src: "https://open.spotify.com/embed/episode/6k9dg05NrDJBiO9unX2gzH?utm_source=generator",
    },
    {
      // <!-- 5minds for the future -->
      src: "https://open.spotify.com/embed/episode/5BYaFhexRJFFm7dKSPVy4e?utm_source=generator",
    },
    {
      // <!-- venrilen endra -->
      src: "https://open.spotify.com/embed/episode/1ACyCEHooAKqg3QOX0dR0h?utm_source=generator",
    },
    {
      // <!-- richdad poor dad -->
      src: "https://open.spotify.com/embed/episode/3CheamB8vapteHvr0KFTMP?utm_source=generator",
    },
    {
      // <!-- thoodu pura -->
      src: "https://open.spotify.com/embed/episode/2LqZexr6QqGuqNOxdHVk0p?utm_source=generator",
    },
    {
      // <!-- the tao of physics -->
      src: "https://open.spotify.com/embed/episode/3wwPAi5wgrGTUaHO96cIrL?utm_source=generator",
    },
    {
      // <!-- Ovvai Patti -->
      src: "https://open.spotify.com/embed/episode/4BEq4ZKUrzOEfzeuJp4dni?utm_source=generator",
    },
    {
      // <!-- PAnchatantra  -->
      src: "https://open.spotify.com/embed/episode/0ZdHTST8p7UeT46je6CqbY?utm_source=generator",
    },
    {
      // <!-- upto 20 -->
      // <!-- Anakupathan  -->
      src: "https://open.spotify.com/embed/episode/3I4UNxB60KIhxF00iiyYAZ?utm_source=generator",
    },
    {
      //  <!-- Pagal nera passanger vanti -->
      src: "https://open.spotify.com/embed/episode/1QiAInK5hrklXqH0r6bYQJ?utm_source=generator",
    },
    {
      //  <!-- oru veedu poori  -->
      src: "https://open.spotify.com/embed/episode/5Drwl0AmiYHEtBT6cbJiN0?utm_source=generator",
    },
    {
      //  <!-- swami deashikan ep1 -->
      src: "https://open.spotify.com/embed/episode/37P499JviY0M4yJ4GPZMau?utm_source=generator",
    },
    {
      //   <!-- swami deshigam ep2 -->
      src: "https://open.spotify.com/embed/episode/0eakmRwwzuqqPwrJ99cnJF?utm_source=generator",
    },
    {
      // <!-- Swami deshigan3 -->
      src: "https://open.spotify.com/embed/episode/25VcC23E7DSC2Ji0pIwHEL?utm_source=generator",
    },
    {
      // <!-- Icarus Paradox -->
      src: "https://open.spotify.com/embed/episode/3sOxDMVocheAJz6LbyEsZR?utm_source=generator",
    },
    {
      // <!-- limitlesss -->
      src: "https://open.spotify.com/embed/episode/0b1Yg2fBW13ZITTv6KsTJs?utm_source=generator",
    },
    {
      // <!-- Alajal oyivadhillai -->
      src: "https://open.spotify.com/embed/episode/6IXszoP3LcwxWqZR4KcImV?utm_source=generator",
    },
    {
      //  <!-- oru oru masal dosai -->
      src: "https://open.spotify.com/embed/episode/21MjA1kRB87OcTQ2BICjtP?utm_source=generator",
    },
    {
      //  <!-- upto 30 -->
      // <!-- PArcel by vanamali -->
      src: "https://open.spotify.com/embed/episode/7ptYedaS6sCmlWDRLBqxBp?utm_source=generator",
    },
    {
      // <!-- mnanai meerum vidhigal -->
      src: "https://open.spotify.com/embed/episode/0LGCecHdzB5BWyNrGwXrhy?utm_source=generator",
    },
    {
      // <!-- rani mangammal -->
      src: "https://open.spotify.com/embed/episode/1ZiTFBH7ZZWRSH5eGFC1Gy?utm_source=generator",
    },
    {
      //  <!-- anami by la sa ra -->
      src: "https://open.spotify.com/embed/episode/3YLng4cqp8dPaDYoy5Myq7?utm_source=generator",
    },
    {
      // <!-- naan yenna saiyatum -->
      src: "https://open.spotify.com/embed/episode/0yRIdCmUbTmCMIgT8o5TDH?utm_source=generator",
    },
    {
      // <!-- sri rangathin kadaigal -->
      src: "https://open.spotify.com/embed/episode/546Vhxff60NQrGxvTHs3LM?utm_source=generator",
    },
    {
      // <!-- puli kakaigan -->
      src: "https://open.spotify.com/embed/episode/1PWkBEstaU1IrlxIoYBZyW?utm_source=generator",
    },
    {
      // <!-- varthayil olinthirukkum kirumi -->
      src: "https://open.spotify.com/embed/episode/33POR0SHtKyiWadj7qITVv?utm_source=generator",
    },
    {
      // <!-- rajappa by thija -->
      src: "https://open.spotify.com/embed/episode/1mSdud9XBsJqIMqLln1xMz?utm_source=generator",
    },
    {
      //  <!-- Aavudai akkal -->
      src: "https://open.spotify.com/embed/episode/2h5XDe955kiLZ1IBtrzqGi?utm_source=generator",
    },
    {
      //  <!-- upto 40 -->
      // <!-- Pudhu delhi -->
      src: "https://open.spotify.com/embed/episode/6Q89HDBH66cCVOoV4f9wzI?utm_source=generator",
    },
    {
      //  <!-- why people don't -->
      src: "https://open.spotify.com/embed/episode/0XPTWqE6xysm4qhso3pjRs?utm_source=generator",
    },
    {
      // <!-- kuruvi -->
      src: "https://open.spotify.com/embed/episode/1f7IgsKiffjAaQR51PFbOf?utm_source=generator",
    },
    {
      //  <!-- oru naayum oru manidhanum -->
      src: "https://open.spotify.com/embed/episode/5qc3L8Stjs0d7DLlNJC3I6?utm_source=generator",
    },
    {
      //  <!-- Madras by chandrasehkar -->
      src: "https://open.spotify.com/embed/episode/11Cr3uCexio8eFUD7YNt91?utm_source=generator",
    },
    {
      // <!-- Seidhi by thi ja -->
      src: "https://open.spotify.com/embed/episode/6ULlqWxpnYNIIy1cJC9V3l?utm_source=generator",
    },
    {
      //  <!-- yenge yen vijay -->
      src: "https://open.spotify.com/embed/episode/1yyEdiRgcIXHAXrbmhzAjY?utm_source=generator",
    },
    {
      // <!-- sapadu potta 40rupees -->
      src: "https://open.spotify.com/embed/episode/1YCukEJW0lKVjHNBo7c4mc?utm_source=generator",
    },
    {
      //  <!-- kaneer -->
      src: "https://open.spotify.com/embed/episode/1ShoSqTvxxowkkdilRLdhU?utm_source=generator",
    },
  ];

  return (
    <div>
    {data.map(({src},index)=>{
      return (<Pro src={src}/>)
    })}
    </div>
  );
}

function Pro({src}) {
 
  return (
    <div>
      <iframe
        src={src}
        style={{ width: "100%", height: "232px", borderRadius: "12px" }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}
export default Project;

// import React from "react";

// function Project() {
//   const data = [
//     {
//       src: "https://open.spotify.com/embed/episode/1Lp3YqJUCBhvrOqEY3EhXq?utm_source=generator",
//     },
//   ];
  
// }



// export default Project;

"use client";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'


const timeTablesLinks = {
    S1: {
      CPI1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBUTtIzZTrSBIojkuA10r3Yt_2KusW2lIIe-z_HIi2k-guTUx3cPXxH4a5-BXUszaxgfAQWYqTXsvd/pubhtml",
      CPI2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnagUH8Z_T5SrJJBgaIU91tuYDd_BM05uYMjGgKhgnOtYsXZekH978GZVkregbe9ry6i7uLsLcMjH3/pubhtml",
      CI1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRP-HQUocyuqN3kL7lV8kRSDdSMWiCleHoUNtwflwYoNAw3uhIY8m8xxjVjW08DfuOHpe5vr_a8wHu_/pubhtml",
      CI2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOvm4s-hP22n2X_XQtMfO2F5bSWrzybL-DKGYxLYU6pufy1oVqpNNcsa5X8g2ClgDvT9GwHuR6pwiG/pubhtml",
      CI3: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQCwqQ7hG4MPz65AFPc3KT8Xph3Yf1InmPc5XzooTejA0XzsJ9SmE6t9cOIyuQMPm9b6x2m73ETeB0p/pubhtml",
    },
    S2: {
      CPI1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-_Ho1eoiNvlXMTZ5OAmxPBfsSQieM5YqRyp86gJd2f-OoLPMyrrR2Lk45HzbSDg/pubhtml?headers=false",
      CPI2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGg2TwjMGwdZDhYmS__DAo-NfG5dSiMaHPxSj3kw5kLZL8dcLlciHuzpRLDsOx3g/pubhtml?headers=false",
      CI1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIgc-5u3baUf13VtH4ffQOnkSjid9hxyHNR3anTCKCiisUARg95T7VhIjHi5bmUA/pubhtml?headers=false",
      CI2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVqXYmZtZMwgQbKZCmaNoEVKDoAE5uqXcJ9LCXZCniJV2bR7uRmIddJBP3uILXZg/pubhtml?headers=false",
      CI3 : "",
    },
  };



function TimeTable() {
    const searchParams = useSearchParams()
    const semester = searchParams.get("semester") || "S1"
    const level = searchParams.get("level") || "CPI1"
    return (
    <iframe src={
        //@ts-ignore
        timeTablesLinks[semester as string][level]
    } style={{ width: "100vw", height: "100vh" }}></iframe>
  );
}

export default TimeTable;

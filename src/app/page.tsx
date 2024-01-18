"use client";
import React, { useState } from "react";
import Link from "next/link";

const styles = {
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 32px",
    borderRadius: "4px",
    backgroundColor: "green",
    margin: "10px",
    width: "220px",
    textAlign: "center",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 32px",
    backgroundColor: "white",
    width: "100%",
    height: "60px",
    color: "gray",
  },
  tabActive: {
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 32px",
    backgroundColor: "white",
    width: "100%",
    height: "60px",
    color: "green",
    borderBottom: "2px solid green",
  },
  text: {
    fontSize: "16px",
    lineHeight: "21px",
    fontWeight: "bold",
    letterSpacing: "0.25px",
    color: "white",
  },
};

function Tab(props: { onClick: any; title?: any; active: any; disabled: any }) {
  const { onClick, title = "Save", active, disabled } = props;
  return (
    <button
      disabled={disabled}
      style={active ? styles.tabActive : styles.tab}
      onClick={onClick}
    >
      <span style={{ ...styles.text, color: active ? "green" : "gray" }}>
        {title}
      </span>
    </button>
  );
}

export default function Home() {
  const [tab, setTab] = useState("S1");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Tab
          title="Semestre 1"
          active={tab == "S1"}
          onClick={() => setTab("S1")}
          disabled={undefined}
        />
        <Tab
          title="Semestre 2"
          active={tab == "S2"}
          onClick={() => setTab("S2")}
          disabled={undefined}
        />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Bonjour, bienvenue sur l&apos;application de gestion des emplois du
          temps d&apos;
          <span style={{ color: "green" }}>
            ESI<span style={{ color: "red" }}>2</span>A
          </span>
        </h1>

        <p style={{ color: "grey", fontSize: "18px", margin: "30px" }}>
          veuillez choisir votre niveau
        </p>
        <div
          style={{
            display: "grid",
            flexDirection: "column",
            placeItems: "center",
          }}
        >
          <Link
            href={"/time/?semester=" + tab + "&level=CPI1"}
            //@ts-ignore
            style={{
              ...styles.button,
              backgroundColor: "green",
            }}
          >
            <span style={styles.text}>{"CPI1 - " + tab}</span>
          </Link>
          <Link
            href={"/time/?semester=" + tab + "&level=CPI2"}
            // @ts-ignore
            style={{
              ...styles.button,
              backgroundColor: "green",
            }}
          >
            <span style={styles.text}>{"CPI2 - " + tab}</span>
          </Link>
          <Link
            href={"/time/?semester=" + tab + "&level=CI1"}
            // @ts-ignore
            style={{
              ...styles.button,
              backgroundColor: "green",
            }}
          >
            <span style={styles.text}>{"CI1 - " + tab}</span>
          </Link>
          <Link
            href={"/time/?semester=" + tab + "&level=CI2"}
            // @ts-ignore
            style={{
              ...styles.button,
              backgroundColor: "green",
            }}
          >
            <span style={styles.text}>{"CI2 - " + tab}</span>
          </Link>
          {tab == "S1" && (
            <Link
              href={"/time/?semester=" + tab + "&level=CI3"}
              // @ts-ignore
              style={{
                ...styles.button,
                backgroundColor: "green",
              }}
            >
              <span style={styles.text}>{"CI3 - " + tab}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

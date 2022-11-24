import React from "react";
import { Scaffold, ImageBackdrop, Page, AppBar } from "../components";
import { useEvent } from "../hooks";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Link, Outlet } from "react-router-dom";
import { BackButton, EventCard } from "../fragments";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");

  if (event === false) {
    return <p>Event not found</p>;
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [window.innerWidth, 0] }}
        exit={{ x: [0, window.innerWidth] }}
        transition={{ type: "spring", duration: 0.3, staggerChildren: 0.3 }}
        className="fixed w-screen h-screen top-0 left-0 z-10 shadow-2xl overflow-scroll bg-black flex flex-col"
      >
        <Scaffold appBar={<AppBar leading={<BackButton />} />}>
          <ImageBackdrop src={event?.bannerURL} dim blur />
          <div className="fixed bottom-0 z-50 left-0 right-0 w-full p-8 transition-all flex-grow shadow-2xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80 bg-opacity-80 backdrop-filter backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200 flex backdrop-blur-3xl justify-between items-center">
            <div className="flex flex-col">
              <div className="uppercase font-bold">Price</div>
              <div className="text-xl text-primary-500">Price</div>
            </div>
            <Link
              to={"instructions"}
              className="px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
              // to={"register"}
            >
              Register
            </Link>
          </div>
          <div className="z-20 p-8 flex flex-col gap-8 flex-grow">
            <EventCard event={event} className=" place-self-center" />
            <Page padding={6} rounded shadow responsive material>
              <div className="flex flex-col gap-2">
                <p
                  className="flex-col uppercase font-light opacity-80"
                  style={{ letterSpacing: 4 }}
                >
                  {event?.Category}
                </p>
                <p className="text-xl font-medium">{event?.Title}</p>
                <p className="text-primary-500">by {event?.organisationName}</p>
              </div>
            </Page>
          </div>
        </Scaffold>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
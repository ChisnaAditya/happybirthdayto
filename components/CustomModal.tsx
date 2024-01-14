"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import AnimatedText from "./AnimatedText";
import CanvasConffeti from "./CanvasConffeti";

export default function CustomModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const message: string = "Happy Birthday! 🎉🎂 On this special day, may joy wrap you like a blanket, laughter fill your moments, and love surround you. Another year of wonderful experiences and new memories awaits. May your dreams take flight and your journey ahead be filled with success, love, and all the happiness in the world. Cheers to another amazing year of your incredible life! 🥳🎈"
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          disableRipple
          className="animate-bounce relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
          size="lg"
          onPress={onOpen}
        >
          Press me
        </Button>
      </div>
      <Modal backdrop={"transparent"} isOpen={isOpen} onClose={onClose} size="xl" placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <article className="prose">
                  <h1></h1>
                  <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    <span className="animate-pulse bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Happy</span>
                    {" "}
                    Birthday
                  </h1>
                </article>
                <AnimatedText text={message} />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <CanvasConffeti />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

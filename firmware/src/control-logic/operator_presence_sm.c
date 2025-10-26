#include "operator_presence_sm.h"
#include "processor_consts.h"
#include <stdbool.h>

// timeout of no input of 10s should be fine to handle
#define TIMEOUT (10000 / PROCESS_MS)

OperatorPresenceState_t absent(bool joystick1Deadman, bool joystick2Deadman,
                               bool seat);
OperatorPresenceState_t activePresence(bool joystick1Deadman,
                                       bool joystick2Deadman, bool seat);

OperatorPresenceState_t active(bool joystick1Deadman, bool joystick2Deadman,
                               bool seat);

static OperatorPresenceState_t currentState = ABSENT;
static unsigned int timestamp = 0u; // this should be 32_t

typedef OperatorPresenceState_t (*processPresence)(bool joystick1Deadman,
                                                   bool joystick2Deadman,
                                                   bool seat);

static processPresence states[NUM_STATES] = {absent, activePresence, active};

void operatorPresenceSmInit(void) {
  currentState = ABSENT;
  timestamp = 0;
}

OperatorPresenceState_t
operatorPresenceSmRun(bool joystick1Deadman, bool joystick2Deadman, bool seat) {

  currentState = states[currentState](joystick1Deadman, joystick2Deadman, seat);
}

void operatorPresenceSmSet(OperatorPresenceState_t const state) {}

OperatorPresenceState_t absent(bool joystick1Deadman, bool joystick2Deadman,
                               bool seat) {

                                
  bool anyDeadman = joystick1Deadman || joystick2Deadman;

}

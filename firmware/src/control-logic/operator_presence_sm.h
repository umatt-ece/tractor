/**
 * @file operator_presence_sm.h
 * @brief This module contains the operator presence state machine.
 *
 * This is the header file for the application control of the operator presence.
 */
#ifndef OPERATOR_PRESENCE_SM_
#define OPERATOR_PRESENCE_SM_

/********************************************************************
 * Includes
 *********************************************************************/

#include <stdbool.h>
/********************************************************************
 * Preprocessor Constants
 *********************************************************************/
/********************************************************************
 * Configuration Constants
 *********************************************************************/
/********************************************************************
 * Macros
 *********************************************************************/
/********************************************************************
 * Typedefs
 *********************************************************************/

/**
 * Defines the potential states for the operator presence.
 */
typedef enum {
  ABSENT,
  ACTIVE_PRESENCE,
  ACTIVE,
  NUM_STATES
} OperatorPresenceState_t;

/********************************************************************
 * Variables
 *********************************************************************/
/********************************************************************
 * Function Prototypes
 *********************************************************************/
#ifdef __cplusplus
extern "C" {
#endif

/**
 * @brief Initialize the operator presence state machine.
 *
 * Must be called once before any other state-machine API. Resets internal
 * state and any timers/counters used by the state machine.
 */
void operatorPresenceSmInit(void);

/**
 * @brief Advance/update the operator presence state machine.
 *
 * Evaluates the provided inputs and updates the internal state machine,
 * performing any transitions or side-effects that are implemented by the
 * state machine.
 *
 * @param joystick1Deadman true when joystick 1 deadman switch is engaged.
 * @param joystick2Deadman true when joystick 2 deadman switch is engaged.
 * @param seat             true when the operator presence (seat) sensor is
 * active.
 * @return The current OperatorPresenceState_t after the update.
 */
OperatorPresenceState_t operatorPresenceSmRun(bool joystick1Deadman,
                                              bool joystick2Deadman, bool seat);

/**
 * @brief Force the operator presence state machine to a specific state.
 *
 * Use for testing, fault recovery, or initialization adjustments. Callers are
 * responsible for ensuring forcing a state is safe in the current system
 * context.
 *
 * @param state The state to set the state machine to.
 */
void operatorPresenceSmSet(OperatorPresenceState_t const state);

#ifdef __cplusplus
} // extern "C"
#endif

#endif /*OPERATOR_PRESENCE_SM_*/
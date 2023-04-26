from hl7apy.parser import parse_message
from hl7apy.core import Message
from hl7apy.core import Segment

def read_hl7(file):
    f = open(file, 'r')
    message = f.read()
    m = parse_message(message)
    for segment in m.children:
        if isinstance (segment, Segment):
            print(segment.to_er7())
            for attribute in segment.children:
                print(attribute, attribute.value)


read_hl7('PL2\msg1_HL7.txt')

def create_hl7_message():
    m = Message()
    m.msh.msh_3 = input('Sending application: ')
    m.msh.msh_4 = input('Sending facility: ')
    m.msh.msh_5 = input('Receiving application: ')
    m.msh.msh_6 = input('Receiving facility: ')
    m.msh.msh_7 = input('Date/time of message: ')
    m.msh.msh_9 = 'MDM^T02^MDM_T02'
    m.msh.msh_10 = "0123456789"
    m.msh.msh_11 = "D"
    m.msh.msh_16 = "AL"
    m.pid.pid_5.pid_5_1 = 'Tomas'
    m.pid.pid_5.pid_5_2 = 'Lima'
    message = parse_message(m)
    f = open('PL2\hl7.txt', 'w')
    f.write(message.to_er7())

create_hl7_message()
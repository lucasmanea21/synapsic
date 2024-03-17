from pyOpenBCI import OpenBCICyton
import datetime

timp=datetime.datetime.now().strftime('%d_%m_%Y_%H_%M_%S')

def print_raw(sample):
    with open(f'EEGdata_{timp}.csv', 'a') as fout:
        for channel in sample.channels_data:
            fout.write(str(channel))
            fout.write(', ')
        fout.write('\n')
    print(sample.channels_data)
board = OpenBCICyton(port='COM3', daisy=False)

board.start_stream(print_raw)
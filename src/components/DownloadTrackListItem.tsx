import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal'; // Import the Modal component
import { StyleSheet } from 'react-native';
import { TrackListItemProps } from '@/assets/types';
import { usePlayerContext } from '../providers/PlayerProvider';

interface TrackItemProps {
  track: any; // Adjust the type based on your data structure
  currentTrack: any; // Adjust the type based on your data structure
  setCurrentTrack: (track: any) => void; // Adjust the type based on your data structure
}

const DownloadTrackItem: React.FC<TrackListItemProps> = ({ track }: TrackListItemProps) => {
  const image = track.album?.images?.[0];
  const { currentTrack, setCurrentTrack } = usePlayerContext();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePress = () => {
    setCurrentTrack(track);
  };

  const handleDelete = () => {
    // Implement the logic to delete the track here
    // You might want to ask for confirmation before deleting
    // Update the code based on your requirements
    toggleModal(); // Close the modal after deleting
  };

  return (
    <View style={
      track === currentTrack
        ? styles.containerActive
        : styles.container
    }>
      <Pressable
        onPress={handlePress}
        style={styles.trackContainer}
      >
        {image && <Image source={{ uri: image.url }} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
        </View>

      </Pressable>
      <MaterialCommunityIcons
        name="dots-vertical"
        size={24}
        color="gray"
        onPress={toggleModal} // Open the modal when the 3-dot icon is pressed
      />
      {/* Delete Option Modal */}
      <Modal backdropOpacity={.5} backdropColor="black" isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <Pressable onPress={handleDelete}>
          <View style={styles.modalContainer}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={24}
              style={styles.trashIcon}
            />
            <Text style={styles.modalText}>Delete from downloads</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default DownloadTrackItem;


const styles = StyleSheet.create({

  container: {
    width: '100%',
    padding: 10,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  trackContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerActive: {
    width: '100%',
    padding: 10,
    backgroundColor: 'lightwhite',
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 2,
  },
  trashIcon: {
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
});


